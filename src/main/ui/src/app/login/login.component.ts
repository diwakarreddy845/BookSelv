import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
//import { User } from '../model/user.model';
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
