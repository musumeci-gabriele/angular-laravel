import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  template: `
    <div class="container">
      <div class="row banner">

        <div class="col-md-12">

          <div class="list-group my-3">
            <div class="list-group-item">

              <div class="row-action-primary">
                <h4 class="list-group-item-heading"><span class="fa fa-user"></span> Manage User</h4>
              </div>

              <div class="row-content">
                <a [routerLink]="['/admin/users']" class="btn btn-info">All Users</a>
                <a [routerLink]="['/admin/users/create']" class="btn btn-primary">New User</a>
              </div>
            </div>
          </div>
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
      .btn {
        margin: 2px;
      }
    `
  ]
})
export class HomeAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}