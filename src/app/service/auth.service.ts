import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {AppStateService} from "./app-state.service";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateUser(user: any) {
      throw new Error('Method not implemented.');
  }

  constructor(public http:HttpClient,
              public appState:AppStateService) { }

  async login(username:string, password:string) {
    let user:any = await firstValueFrom(this.http.get(`http://localhost:8089/users/${username}`));

    if (password == user.password) {

     
      this.appState.setAuthState({
        isAuthenticated: true,
 
      });
      return Promise.resolve(true);
    } else {
      return Promise.reject('Bad credentials');
    }
  }
}
