import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  SendToForgetPassword() {
    this.router.navigateByUrl('/recuperar-senha');
  }

  handleClick() {
    this.router.navigateByUrl('/home');
  }
  cancelClick() {
    this.router.navigateByUrl('/');
  }

  value1!: string;
  value2!: string;
}
