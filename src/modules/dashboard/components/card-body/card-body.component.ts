import { Component, OnInit, Input } from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {GlobalCardBodyInterface} from './../../interfaces/card-interfaces/global-card-body-interface';
@Component({
  selector: 'dashboard-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  icons = {
    faInfoCircle,
  };

  @Input() bodyData: GlobalCardBodyInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
