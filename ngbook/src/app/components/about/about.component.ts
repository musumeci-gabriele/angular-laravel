import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mt-lg-auto">
          <h1>ABOUT PAGE</h1>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      h1{
        color: green;
        font-size: 15vh;
        font-family: 'Big Shoulders Inline Text', cursive;
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
