import { Component, OnInit, Input } from '@angular/core';
import {GlobalCardInterface} from './../../interfaces/card-interfaces/global-card-interface';

@Component({
  selector: 'dashboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: GlobalCardInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
