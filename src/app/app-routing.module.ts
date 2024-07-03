import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'itens',
    loadChildren: () => import('./item/item-listar/item-listar.module').then(module => module.ItemListarModule)
  },
  {
    path: 'itens/cadastrar',
    loadChildren: () => import('./item/item-cadastrar-editar/item-cadastrar-editar.module').then(module => module.ItemCadastrarEditarModule)
  },
  {
    path: 'itens/editar/:id',
    loadChildren: () => import('./item/item-cadastrar-editar/item-cadastrar-editar.module').then(module => module.ItemCadastrarEditarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
