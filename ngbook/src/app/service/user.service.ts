import { Injectable } from '@angular/core';
// * Importante da importare i seguenti metodi
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../models/user';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

const API = `http://127.0.0.1:8000/api/v1/users`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // VISUALIZZARE LA LISTA USER
  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(API);
  }
  // * metodo aggiungi utente
  addUser(user: User): Observable<any> {
    return this.http.post(API, user)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler)
      );
  }
  
  errorHandler(error: HttpErrorResponse): any {
    return throwError(error.error || {message: 'Server Error'});
  }
}