import { Component, OnInit, Input } from '@angular/core';
import { GenericCardInterface } from '../../interfaces/stats-viewer-interfaces/generic-card-interface';

@Component({
  selector: 'dashboard-generic-cards',
  templateUrl: './generic-cards.component.html',
  styleUrls: ['./generic-cards.component.scss']
})
export class GenericCardsComponent implements OnInit {

  @Input() data: GenericCardInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
