import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mt-lg-auto">
          <h1>HOME PAGE</h1>
        </div>
      </div>
    </div>
  `,
styles: [
  `
    h1{
      color: red;
      font-size: 15vh;
      font-family: 'Big Shoulders Inline Text', cursive;
    }
  `
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}