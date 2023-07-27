import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountservicesService } from '../services/accountservices.service';
import { LoginData } from './LoginData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  /**
   *
   */
  loginData = new LoginData();
  LoginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountservicesService,
    private route:Router
  ) {
    this.LoginForm = this.formBuilder.group({
      username: [''],
      Password: [''],
    });
  }
  ngOnInit() {}
  isValidEmail(email: string): boolean {
    // Add your email validation logic here
    // For simplicity, we'll use a basic regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  Login() {
    if (this.isValidEmail(this.LoginForm.value['username'])) {
      this.loginData.Email = this.LoginForm.value['username'].trim();
      this.loginData.PhoneNumber = "0";
    } else {
      // If it's not a valid email, assume it's a phone number
      this.loginData.Email = "0";
      this.loginData.PhoneNumber = this.LoginForm.value['username'].trim();
    }
    this.loginData.Password = this.LoginForm.value['Password'];
    console.log(this.loginData);
    console.log(this.LoginForm.value);
    this.accountService.ILogin(this.loginData).subscribe(
      (response) => {
        console.log(response);
        if(response){
          this.route.navigateByUrl('\booklist')
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
