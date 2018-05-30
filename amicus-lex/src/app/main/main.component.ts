import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http){
    console.log('hello test');
    this.getContacts();
    this.getData();
  }

  getData(){
    console.log('hello test');
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getContacts(){
    console.log('hello test');
    this.getData().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
