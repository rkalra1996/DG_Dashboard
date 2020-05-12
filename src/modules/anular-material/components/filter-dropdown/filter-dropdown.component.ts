import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map, tap} from 'rxjs/operators';

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
      tap( value => {
        console.log(value);
        return value;
      }),
      startWith(''),
      map(value => this._filter(value))
      );
  }

  _filter(value) {
    if (value === '') {
      this.submitSelectedValue('');
    }
    const filterValue = value.toLowerCase();
    return this.dropdownList.filter(option => option.toLocaleLowerCase().includes(filterValue));
  }

  submitSelectedValue(event) {
    if( event === ''){
      this.selected.emit(event);
    } else {
    this.selected.emit(event.option.value.trim());
    }
  }

}
