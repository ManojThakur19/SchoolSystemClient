import { Component } from '@angular/core';
import { Register } from '../models/register';
import {FormsModule} from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  formData = new Register();

  isPosting: boolean = false;

  constructor(public _registerService:RegisterService,public router:Router) { }

  register(){
    this._registerService.register(this.formData)
    .pipe(first())
    .subscribe(data => {
      
      this.router.navigate(['/auth/login']);
    },
    error => {
        this.isPosting = false;
    });
  }

}
