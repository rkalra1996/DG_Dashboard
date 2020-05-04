import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCoreComponent } from './components/dashboard-core/dashboard-core.component';
import { AnularMaterialModule } from '../anular-material/anular-material.module';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardCoreComponent, CardComponent, CardHeaderComponent, CardBodyComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AnularMaterialModule,
    FontAwesomeModule,
  ],
  exports: [DashboardCoreComponent],
})
export class DashboardModule { }
