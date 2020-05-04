import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLeftSectionComponent } from './components/header-left-section/header-left-section.component';
import { HeaderRightSectionComponent } from './components/header-right-section/header-right-section.component';
import { HeaderMiddleSectionComponent } from './components/header-middle-section/header-middle-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent, HeaderLeftSectionComponent,
    HeaderRightSectionComponent, HeaderMiddleSectionComponent,
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
    FontAwesomeModule,]
})
export class SharedModule { }
