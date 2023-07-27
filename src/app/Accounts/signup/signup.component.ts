import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountservicesService } from '../services/accountservices.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  SignUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private signupServices:AccountservicesService) {
    this.SignUpForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      userName: [''],
      PhoneNumber: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      isAuthor: [false],
      DateOfBirth: [''],
      Biography: [''],
      country: ['']
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here if needed
  }

  signUpData() {
    console.log("hey");
    console.log(this.SignUpForm.value);
    this.signupServices.IAddUsers(this.SignUpForm.value).subscribe(
      (response) => {
        console.log(response); // Handle the response data (list of users)
        // Assign the response to the users property for further use in the component
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  getUsers(){
    this.signupServices.IGetUsers().subscribe(
      (response) => {
        console.log(response); // Handle the response data (list of users)
        // Assign the response to the users property for further use in the component
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
