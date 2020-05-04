import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-header-left-section',
  templateUrl: './header-left-section.component.html',
  styleUrls: ['./header-left-section.component.scss']
})
export class HeaderLeftSectionComponent implements OnInit {

  @Output() toggleClick = new EventEmitter<any>();

  icons = {
    faBars,
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtnClicked() {
    this.toggleClick.emit(true);
  }


}
