import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  value4!: string;

  updateProduct = () => {
    this.router.navigateByUrl('home');
  };
  goBack = () => {
    this.router.navigateByUrl('home');
  };
}
