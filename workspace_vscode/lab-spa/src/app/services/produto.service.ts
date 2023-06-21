import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDTO } from '../dtos/produto.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URI_PRODUTOS = "assets/exemplo-de-produtos.json";

  constructor(private client: HttpClient) { }

  public findAll(): Observable<ProdutoDTO[]> {
    return this.client.get<ProdutoDTO[]>(this.URI_PRODUTOS);
  }
} 
