import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Accounts/login/login.component';
import { SignupComponent } from './Accounts/signup/signup.component';
import { BooksListComponent } from './books-list/books-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarWritersComponent } from './navbar-writers/navbar-writers.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { initializeApp ,provideFirebaseApp} from '@angular/fire/app';
import { environment } from '../environment/environment';
import { provideAuth,getAuth } from "@angular/fire/auth";
import { provideFirestore,getFirestore } from "@angular/fire/firestore";
import { provideStorage,getStorage } from "@angular/fire/storage";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BooksListComponent,
    NavbarComponent,
    NavbarWritersComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    provideStorage(()=>getStorage()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
