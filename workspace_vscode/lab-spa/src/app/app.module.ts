import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoTabelaComponent } from './components/produto-tabela/produto-tabela.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoTabelaComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
