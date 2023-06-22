import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/app/dtos/produto.dto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent implements OnInit {

  produtos: ProdutoDTO[] = [];

  constructor(private service: ProdutoService) {
    this.service.findAll()
      .subscribe({
        next: (data) => this.produtos = data,
        error: (e) => console.error(e)
      });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
