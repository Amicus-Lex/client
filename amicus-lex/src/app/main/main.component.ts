import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';
import {MatDialog} from '@angular/material';
import {DetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};
  result: any ={};

  constructor(private http: Http, public dialog: MatDialog){
    console.log('hello test');
    this.getContacts();
    this.getData();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DetailsComponent, {
      height: '350px'
    });

    //dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      //this.result = result;
    //});
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
