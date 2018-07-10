import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';
import {MatDialog} from '@angular/material';
import {DetailsComponent} from '../details/details.component';
import {xml2json} from '../../../node_modules/xml2js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};
  result: any ={};
  companies: any = {};
  appetizers: any = [];
  SOURCE_FILE = 'https://www.senat.fr/rss/rapports.xml';
  private _url= 'assets/sena.json';

  constructor(private http: Http, public dialog: MatDialog){
    this.getContacts();
    this.getData();
    this.getTransform();
    this.getsena();
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



	getTransform() {
    return this.http.get(this._url)
      .map((response: Response) => response.json());
  }

  getsena(){
    this.getTransform().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }


  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getContacts(){
    this.getData().subscribe(data =>{
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
