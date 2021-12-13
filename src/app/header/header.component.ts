import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  frontPage() {
    this.router.navigateByUrl('front-page');
  }

  loggedIn() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token')

  }

  postPage() {
    this.router.navigateByUrl('add-item');
  }
}
