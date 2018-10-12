import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get("api/allBooks");
  }

  userSignIn(formgroup: FormGroup) {
    return this.http.post("api/userByEmail", formgroup.value, httpOptions);
  }

  userSignUp(formgroup: FormGroup) {
    return this.http.put("api/saveUser", formgroup.value, httpOptions);
  }

  saveBook(formgroup: FormGroup){
    return this.http.put("api/saveBook", formgroup.value, httpOptions);
  }
}