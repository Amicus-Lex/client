import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http) {
    
  }

  ngOnInit() {
  }

}