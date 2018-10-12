import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

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
