import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    //execute action
  }

  clickEdit() {
    //execute action
  }

  clickDetails() {
    //execute action
  }
  clickDelete() {
    //execute action
  }
  tableTitle = 'Chocolate';
  CardText = 'Chocolate Amargo';
}
