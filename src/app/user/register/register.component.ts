import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../shared/models/user";
import * as alertify from 'alertifyjs';
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm:any = FormGroup;
  user: User = {};
  userSubmitted: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    /*this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);*/
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
      { notMatched: true }
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
     // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userDate());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('Your registration was successful!');
    } else {
      this.alertifyService.error('Please fill out the required fields');
    }
  }

  userDate(): User {
    return this.user = {
      userName: this.userName.value,
      password: this.password.value,
      phoneNumber: this.phoneNumber.value,
      email: this.email.value,
    }
  }

}
