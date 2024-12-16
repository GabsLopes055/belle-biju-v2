import { Injectable } from '@angular/core';
import { login } from '../../models/login.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public logar(login: login) : Observable<any> {
    return this.http.post<any>(`${URL}/authentication/login`, login);
  }

}
