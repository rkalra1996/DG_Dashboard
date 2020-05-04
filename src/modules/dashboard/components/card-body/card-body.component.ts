import { Component, OnInit } from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'dashboard-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  icons = {
    faInfoCircle,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
