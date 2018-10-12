import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
//import { User } from '../model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginerror=false;
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(6),
      ])
    
    })
  }

  hide = true;
  loginerror:boolean;

  loginForm: FormGroup;


  userSignIn() {
    this.loginService.userSignIn(this.loginForm)
    .subscribe((response: User) => {
      console.log(response);
      if (response!= null && response.password === this.loginForm.get('password').value) {
        this.router.navigate(['/useraccount']);
      }else{
        this.loginerror=true;
      }
    }
    );
  }

 
}

