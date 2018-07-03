import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MainComponent }      from '../main/main.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  regiUser(e){
    e.preventDefault();
    console.log(e);
    var emailadress = e.target.elements[0].value;
    var username = e.target.elements[1].value;
    var password = e.target.elements[2].value;
    var confpassword = e.target.elements[3].value;

    var token = 'CkCm57gXCPRhRD8Fm7V928j4zcUg89AQKMlHjfYG';
    //console.log(username, password);
    //return false;
    //this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
     // console.log(data);
    //});

    return this.http.post('https://amicus-lex.herokuapp.com/register', {
    _token: token,  
    name:username,
    email: emailadress,
    password_confirmation:confpassword,
    password: password,
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          if (err === 401) { this.router.navigateByUrl('../main/main.component')};
        }
      );

    /*return this.http
      .post('https://amicus-lex.herokuapp.com/login', emailadress, password)
      .map(response => response.json());
      console.log(this.http);
  }*/
  }

}
