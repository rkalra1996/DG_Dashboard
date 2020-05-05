import { Component, OnInit, Input } from '@angular/core';
import {GlobalCardHeaderInterface} from './../../interfaces/card-interfaces/global-card-header-interface';

@Component({
  selector: 'dashboard-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {

  @Input() headerData: GlobalCardHeaderInterface;
  CONSTANTS = {
    BLOCK_TYPE_IMAGE: 'image',
    BLOCK_TYPE_SESSION: 'section',
    BLOCK_TYPE_CHART: 'chart',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
