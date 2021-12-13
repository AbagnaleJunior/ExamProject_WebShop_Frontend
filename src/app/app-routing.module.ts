import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ItemPageComponent} from "./item-page/item-page.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {AddItemComponent} from "./add-item/add-item.component";

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'item/:id', component:ItemPageComponent},
  {path: 'front-page', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'add-item', component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
