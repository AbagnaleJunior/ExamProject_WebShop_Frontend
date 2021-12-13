import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user:any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(<string>localStorage.getItem('Users'));
    }
    return UserArray.find(
      (p: { userName: any;               // === is used instead of ==, because === means it's a strict equality operator
            password: any; }) => p.userName === user.userName && p.password === user.password);
  }
}
