import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 400px;
        height: 50px;
        padding: 5px;

        outline: 0;
        border-radius: 10px;
        border-style: none;
        margin-bottom: 15px;
        align-items: center;
        background-color: #161616;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value1!: string;

  value2!: string;

  value3!: string;

  value4!: string;

  value5!: string;

  value6!: string;
}
