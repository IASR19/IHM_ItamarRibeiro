import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoTabelaComponent } from './components/produto-tabela/produto-tabela.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/components/home/home.component';

const routes: Routes = [
  {
    path: 'produtotabela',
    component: ProdutoTabelaComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
