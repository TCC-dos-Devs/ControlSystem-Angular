import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/app/dtos/produtos.dto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
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

  ngOnInit(): void {}

  value4!: string;

  goBack = () => {
    this.router.navigateByUrl('home');
  };

  adicionar() {
    this.service.salvar(this.produto).subscribe((resposta) => {
      this.produto = {
        id: 0,
        categoria: '',
        name: '',
        validade: 0,
        sabor: '',
        quantidade: 0,
        descricao: '',
      };
      this.router.navigateByUrl('home');
    });
  }
}
