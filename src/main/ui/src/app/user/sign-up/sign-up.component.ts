import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    private router: Router) { }

  registrationForm: FormGroup;
  ngOnInit() {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl,
      'lastName': new FormControl,
      'gender': new FormControl,
      'address': new FormControl,
      'city': new FormControl,
      'state': new FormControl,
      'pincode': new FormControl,
      'phone': new FormControl,
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
    this.loginerror=false;
  }

  hide = true;
  loginerror:boolean;

  userSignUp(){
    this.loginService.userSignUp(this.registrationForm)
    .subscribe((response: FormGroup) => {
      if (response!= null ) {
        this.router.navigate(['/useraccount']);
      }else{
        this.loginerror=true;
      }
    }
    );
  }
}
