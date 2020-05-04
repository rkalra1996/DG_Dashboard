import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitToggleEvent(event) {
    this.toggleClicked.emit(event);
  }

}
