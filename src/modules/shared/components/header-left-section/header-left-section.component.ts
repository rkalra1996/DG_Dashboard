import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-header-left-section',
  templateUrl: './header-left-section.component.html',
  styleUrls: ['./header-left-section.component.scss']
})
export class HeaderLeftSectionComponent implements OnInit {

  icons = {
    faCoffee,
  };

  constructor() { }

  ngOnInit(): void {
  }


}
