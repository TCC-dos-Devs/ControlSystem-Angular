import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `,
  ],
})
export class ForgetPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value1!: string;

  value2!: string;

  value3!: string;

  value4!: string;
}
