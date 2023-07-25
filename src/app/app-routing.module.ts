import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Accounts/login/login.component';
import { SignupComponent } from './Accounts/signup/signup.component';
import { BooksListComponent } from './books-list/books-list.component';
import { NavbarWritersComponent } from './navbar-writers/navbar-writers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbookComponent } from './addbook/addbook.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'booklist',component:BooksListComponent},
  {path:'writernavbar',component:NavbarWritersComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'addbook',component:AddbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
