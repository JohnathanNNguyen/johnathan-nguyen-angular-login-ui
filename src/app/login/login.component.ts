import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.max(2000), Validators.min(1900)])
  })

  constructor(private router: Router) { }

  onSubmitButton(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        email: this.login.value.email,
        first: this.login.value.firstName,
        last: this.login.value.lastName,
        birthday: this.login.value.birthday
      }
    }
    this.router.navigate(['/logged-in'], navigationExtras)

  }

}

