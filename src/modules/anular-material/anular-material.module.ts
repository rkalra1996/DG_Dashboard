import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [FilterDropdownComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatSidenavModule, FilterDropdownComponent,
    MatFormFieldModule, FilterDropdownComponent,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
  ],
})
export class AnularMaterialModule { }
