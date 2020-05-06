import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-stats-viewer',
  templateUrl: './stats-viewer.component.html',
  styleUrls: ['./stats-viewer.component.scss']
})
export class StatsViewerComponent implements OnInit {

  @Input() stats: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
