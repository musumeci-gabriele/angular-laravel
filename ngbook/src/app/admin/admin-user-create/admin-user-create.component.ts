import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from '../../classe/custom-validators';




@Component({
  selector: 'app-admin-user-create',
  template: `
   <div class="container">
      <div class="col-md-12">
        <div>
          <a [routerLink]="['/admin/']" class="btn btn-light"> Back</a>
        </div>
      </div>

      <div class="col-md-12">
        <div class="card card-body bg-light">
          <form novalidate class="form-horizontal" (ngSubmit)="createUser()" [formGroup]="userForm">
            <fieldset>
              <legend>Aggiungi un nuovo utenter</legend>
              <div class="form-group">
                <label for="email" class="col-lg-2 control-label">Email</label>
                <div class="col-lg-10">
                  <input type="email" class="form-control" id="email" name="email" placeholder="Inserisci email" formControlName="email">
                  <div *ngIf="userForm.get('email').dirty && userForm.get('email').hasError('invalidEmail')" class="alert alert-danger">Formato email non valido</div>
                  <div *ngIf="userForm.get('email').dirty && userForm.get('email').hasError('required')" class="alert alert-danger">Email richiesta</div> 
                  <div *ngIf="userForm.get('email').dirty && userForm.get('email').hasError('minlength')" class="alert alert-danger">Devi scrivere almeno 3 caratteri</div>
                </div>
              </div>
              <div class="form-group">
                <label for="name" class="col-lg-2 control-label">Full name</label>
                <div class="col-lg-10">
                  <input type="text" class="form-control" id="name" name="name" placeholder="Inserisci nome e cognome" formControlName="name">
                  <div *ngIf="userForm.get('name').dirty && userForm.get('name').hasError('required')" class="alert alert-danger">Nome richiesto</div>
                  <div *ngIf="userForm.get('name').dirty && userForm.get('name').hasError('minlength')" class="alert alert-danger">Il nome deve contenere almeno 3 caratteri</div>
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="col-lg-2 control-label">Password</label>
                <div class="col-lg-10">
                  <input type="password" class="form-control" id="password" name="password" placeholder="Password" formControlName="password">
                  <div *ngIf="userForm.get('password').dirty && userForm.get('password').hasError('hasNumber')" class="alert alert-danger">La password deve contenere anche numeri</div>
                  <div *ngIf="userForm.get('password').dirty && userForm.get('password').hasError('hasCapitalCase')" class="alert alert-danger">La password deve contenere anche caratteri maiuscoli</div>
                  <div *ngIf="userForm.get('password').dirty && userForm.get('password').hasError('hasCamelCase')" class="alert alert-danger">La password deve contenere anche caratteri minuscoli</div>
                  <div *ngIf="userForm.get('password').dirty && userForm.get('password').hasError('hasSpecialCharacters')" class="alert alert-danger">La password deve contenere almeno un carattere speciale: @ # | ! * </div>
                  <div *ngIf="userForm.get('password').dirty && userForm.get('password').hasError('required')" class="alert alert-danger">Password richiesta</div>
                  <div *ngIf="userForm.get('password').dirty && userForm.get('password').hasError('minlength')" class="alert alert-danger">La password deve contenere almeno 6 caratteri</div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <a [routerLink]="['/admin/']" class="btn btn-light"> Cancel</a>
                  <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">Create</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .btn {
        margin: 5px;
      }
    `
  ]
})

export class AdminUserCreateComponent implements OnInit {
  user!: User;
  userForm: FormGroup;

  static isValidEmail(control: FormControl): any {
    const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  
    return emailRegexp.test(control.value) ? null : {
      invalidEmail: true
    };
  }

  // * Una volta che importiamo FormBuilder e FormGroup , possiamo creare un userForm tutti i campi devono essere obbligatori. l’email e il nome devono contenere almeno 3 caratteri. Il campo  password deve contenere almeno 6 caratteri.
  constructor(private userService: UserService, private router: Router, fb: FormBuilder) {
    this.userForm = fb.group({
      email: fb.control('', [Validators.required, Validators.minLength(3), AdminUserCreateComponent.isValidEmail]),
      name: fb.control('', [Validators.required, Validators.minLength(3)]),
      password: fb.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[@#{}|!()*{}]/, { hasSpecialCharacters: true }),
      ])
    });
  }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.addUser(this.userForm.value)
      .subscribe(response => {
        this.user = response;
        console.log(this.user);
        this.router.navigate(['/admin/users']); 
      } ); 
  }
  
}
