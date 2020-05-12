import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardCoreService } from 'src/modules/dashboard/services/dashboard-core-service/dashboard-core.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  state = 'Block Dashboard';

  @Output() toggleClicked = new EventEmitter<any>();
  constructor(private readonly dcSrvc: DashboardCoreService) { }

  ngOnInit(): void {
    this.dcSrvc.events$.forEach(event => {
      console.log(event);
      if ( event === '') {
            this.state = 'Consolidated Dashboard';
      } else {
        const state = event;
        this.state = state + ' Dashboard';
      }

    }
      );
  }

  emitToggleEvent(event) {
    this.toggleClicked.emit(event);
  }

}
