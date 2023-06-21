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

  constructor() {
    this.produtos = [
      { id: 1, descricao: 'Furadeira', preco: 800.00 }
      ,
      { id: 2, descricao: 'Lixadeira', preco: 350.00 }
      ,
      { id: 3, descricao: 'Serra Circular', preco: 500.00 }
    ];

    //apenas para debug:
    for (let p of this.produtos) {
      console.log(p.id);
      console.log(p.descricao);
      console.log(p.preco);
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
