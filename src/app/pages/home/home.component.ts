import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/app/dtos/produtos.dto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produto: ProdutoDTO = {
    id: 0,
    categoria: '',
    name: '',
    validade: 0,
    sabor: '',
    quantidade: 0,
    descricao: '',
  };
  constructor(private router: Router, private service: ProdutoService) {}

  ngOnInit(): void {
    this.buscar();
  }

  handleClick() {
    //execute action
  }

  clickEdit() {
    this.router.navigateByUrl('atualizar-produto');
    //execute action
  }
  clickDelete() {
    //execute action
  }

  displayResponsive: boolean = false;

  showDetails() {
    this.displayResponsive = true;
  }
  autoResize: boolean = false;

  buscar() {
    this.service.buscarPorId(1).subscribe((resposta) => {
      this.produto = {
        id: resposta.id,
        categoria: resposta.categoria,
        name: resposta.name,
        validade: resposta.validade,
        sabor: resposta.sabor,
        quantidade: resposta.quantidade,
        descricao: resposta.descricao,
      };
    });
  }
}
