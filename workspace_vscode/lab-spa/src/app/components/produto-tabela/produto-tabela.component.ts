import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/app/dtos/produto.dto';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent {
  produtos: ProdutoDTO[] = [];

  constructor(
    private produtoService: ProdutoService,
    private alertService: AlertService
  ) {
    this.produtoService.findAll().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (e) => {
        let tit = 'Erro buscando produto';
        let msg = e.message;
        this.alertService.error(tit, msg);
        console.error(e);
      }
    });
  }
}
