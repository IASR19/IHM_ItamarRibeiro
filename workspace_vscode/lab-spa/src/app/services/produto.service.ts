import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDTO } from '../dtos/produto.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URI_PRODUTOS = "http://localhost:8081/produto";

  constructor(private client: HttpClient) { }

  public findAll(): Observable<ProdutoDTO[]> {
    return this.client.get<ProdutoDTO[]>(this.URI_PRODUTOS);
  }
} 
