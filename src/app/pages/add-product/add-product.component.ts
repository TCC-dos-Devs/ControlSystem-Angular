import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  value4!: string;

  addProduct = () => {
    this.router.navigateByUrl('home');
  };
  goBack = () => {
    this.router.navigateByUrl('home');
  };
}
