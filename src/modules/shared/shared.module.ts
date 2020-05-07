import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLeftSectionComponent } from './components/header-left-section/header-left-section.component';
import { HeaderRightSectionComponent } from './components/header-right-section/header-right-section.component';
import { HeaderMiddleSectionComponent } from './components/header-middle-section/header-middle-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './components/loader/loader.component';
import { HighchartsDonoughtComponent } from './components/charts/highcharts-donought/highcharts-donought.component';

@NgModule({
  declarations: [
    HeaderComponent, HeaderLeftSectionComponent,
    HeaderRightSectionComponent, HeaderMiddleSectionComponent, LoaderComponent, HighchartsDonoughtComponent,
    ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    HeaderLeftSectionComponent,
    HeaderRightSectionComponent,
    HeaderMiddleSectionComponent,
    LoaderComponent,
    HighchartsDonoughtComponent,
    FontAwesomeModule, ]
})
export class SharedModule { }
