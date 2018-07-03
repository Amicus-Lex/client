import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var emailadress = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var token = 'CkCm57gXCPRhRD8Fm7V928j4zcUg89AQKMlHjfYG';
    //console.log(username, password);
    //return false;
    //this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
     // console.log(data);
    //});

    return this.http.post('https://amicus-lex.herokuapp.com/login', {
    _token:token,
    email: emailadress,
      password: password,
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
      

    /*return this.http
      .post('https://amicus-lex.herokuapp.com/login', emailadress, password)
      .map(response => response.json());
      console.log(this.http);
  }*/
  }
}