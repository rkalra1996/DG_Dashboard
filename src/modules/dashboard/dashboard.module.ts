import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCoreComponent } from './components/dashboard-core/dashboard-core.component';
import { AnularMaterialModule } from '../anular-material/anular-material.module';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { GenericCardsComponent } from './components/generic-cards/generic-cards.component';
import { StatsViewerComponent } from './components/stats-viewer/stats-viewer.component';

@NgModule({
  declarations: [DashboardCoreComponent, CardComponent, CardHeaderComponent, CardBodyComponent, GenericCardsComponent, StatsViewerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    AnularMaterialModule,
    SharedModule,
  ],
  exports: [DashboardCoreComponent],
})
export class DashboardModule { }
