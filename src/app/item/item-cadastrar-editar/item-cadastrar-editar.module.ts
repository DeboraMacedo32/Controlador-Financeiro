import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ItemCadastrarEditarComponent } from './itemcadastrar-editar/itemcadastrar-editar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [ItemCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    ItemCadastrarEditarRoutingModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ]
})
export class ItemCadastrarEditarModule { }
