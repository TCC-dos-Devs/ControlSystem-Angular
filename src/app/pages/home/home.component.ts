import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
  tableTitle = 'Chocolate';
  CardText = 'Chocolate Amargo';

  detalhes = {
    categoria: 'Iorgute',
    validade: '09/2022',
    sabor: 'Morango',
    quantidade: '20',
  };

  autoResize: boolean = false;
}
