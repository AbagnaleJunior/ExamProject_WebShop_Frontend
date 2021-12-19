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
      (p: { userName: any;
            password: any; }) => p.userName === user.userName && p.password === user.password);
  }
}

// === is used instead of ==, because === means it's a strict equality operator
