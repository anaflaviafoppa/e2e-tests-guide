import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Route} from '../../../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.min(10));
  form = this._formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl,
  });
  constructor(private _formBuilder: FormBuilder,
              private _router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmitForm(){
    const email = this.form.get('email')?.value;
    sessionStorage.setItem('userEmail', JSON.stringify(email));
    this._router.navigate([Route.HOME]).then(() => {});
  }
}
