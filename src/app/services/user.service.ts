import { Injectable } from '@angular/core';
import {User} from "../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') as string);
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
