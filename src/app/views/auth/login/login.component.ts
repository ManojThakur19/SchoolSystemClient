import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Login } from '../models/login';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  formData = new Login();

  isLoading = false;
  returnUrl: string;

  constructor(private _authService:AuthService,public router : Router,public route : ActivatedRoute) { 
    // redirect to home if already logged in
    // if (this._authService.currentUserValue) { 
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(){
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Login(){
    this.isLoading = true;
        this._authService.login(this.formData)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.isLoading = false;
                });
    }
  }
 
