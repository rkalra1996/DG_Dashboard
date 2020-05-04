import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCoreComponent } from './components/dashboard-core/dashboard-core.component';
import { AnularMaterialModule } from '../anular-material/anular-material.module';


@NgModule({
  declarations: [DashboardCoreComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AnularMaterialModule,
  ],
  exports: [DashboardCoreComponent],
})
export class DashboardModule { }
