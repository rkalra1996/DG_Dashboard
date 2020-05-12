import { Component, OnInit, Input } from '@angular/core';
import { DashboardCoreService } from 'src/modules/dashboard/services/dashboard-core-service/dashboard-core.service';

@Component({
  selector: 'shared-header-middle-section',
  templateUrl: './header-middle-section.component.html',
  styleUrls: ['./header-middle-section.component.scss']
})
export class HeaderMiddleSectionComponent implements OnInit {

 @Input()
 statetodisplay;

  constructor() { }

  ngOnInit() {
    // this.dcSrvc.events$.forEach(event => {
    //   console.log(event);
    //   const state = event;
    //   this.state = state;
    // }
    //   );
  }

  // setValue(newValue: string) {
  //   console.log(this.)
  //   this.value = newValue;
  // }

}
