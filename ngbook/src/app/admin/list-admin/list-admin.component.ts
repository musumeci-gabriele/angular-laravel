import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-list-admin',
  template: `
    <div class="container">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>

            <tr *ngFor="let user of users">
              <td>{{user.id}}</td>
              <td>{{user.name}} </td>
              <td>{{user.email}} </td>
              <td>
                <a [routerLink]="['/users/edit']" class="btn btn-info"> Edit</a>
                <a [routerLink]="['/users/delete']" class="btn btn-danger"> Delete</a>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .btn {
      margin: 2px;
    }
  `]
})
export class ListAdminComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {
  }
  // LETTURA DATI
  getUser(): any {
  return this.userService.getUsers()
    .subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
}

  ngOnInit(): void {
    this.getUser();
  }

}