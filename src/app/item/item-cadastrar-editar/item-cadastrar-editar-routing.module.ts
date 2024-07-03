import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCadastrarEditarComponent } from './itemcadastrar-editar/itemcadastrar-editar.component';

const routes: Routes = [
  {
    path: '', component: ItemCadastrarEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCadastrarEditarRoutingModule { }
