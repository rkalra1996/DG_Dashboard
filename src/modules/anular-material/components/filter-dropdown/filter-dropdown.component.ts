import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {startWith, filter, map} from 'rxjs/operators';

@Component({
  selector: 'angular-material-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent implements OnInit {

  @Input() dropdownList: string[];
  @Output() selected = new EventEmitter<any>();

  materialDropdownControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.materialDropdownControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
      );
  }

  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.dropdownList.filter(option => option.toLocaleLowerCase().includes(filterValue));
  }

  submitSelectedValue(event) {
    this.selected.emit(event.option.value.trim());
  }

}
