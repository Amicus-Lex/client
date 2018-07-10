import { Component, OnInit } from '@angular/core';
import {Http, Response } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  private apiUrl = 'https://amicus-lex.herokuapp.com/law/themes';
  data: any = {};
  userTheme:string = 'Personnes';

  themes = this.getThemes();

  themes2 = [
    {value:this.data[0],viewValue:this.data[1]}
  ];

  constructor(private http: Http){
    this.getThemes();
    //this.getData();
  }

  selectedTheme(event : any){
    console.log("my theme",event.target.theme.value);
  }
 
  Print = function(){
    alert(this.userTheme);
}
getThemeData = function(theme, key){
  console.log(theme,key);
  stop();
  this.http.get('https://amicus-lex.herokuapp.com/law/search?book='+theme+'&article=' + ''+'&notArticle='+''+'&title='+2)
  .map((res: Response) => res.json())
  .subscribe(data => {
console.log(data);
this.data = data;
});

 console.log(theme.value);
}

  lunchSearch(e){
    e.preventDefault();
    console.log(e);
    this.userTheme= ""+e;
    console.log(this.userTheme);

    this.data.theme = this.themes;
    console.log("hello", e.target.value);
    var search = e.target.elements[0].value;
    //var token = 'CkCm57gXCPRhRD8Fm7V928j4zcUg89AQKMlHjfYG';
    //console.log(username, password);
    //return false;
    //let URL = "https://amicus-lex.herokuapp.com/law/search?book=" + 'propriétés' + 
      //  "&article=228&inc=name,gender,nat,picture&noinfo";
    return this.http.get('https://amicus-lex.herokuapp.com/law/search?book='+'proprietes'+'&article=' + search +'&notArticle='+''+'&title='+2)
                    .map((res: Response) => res.json())
                    .subscribe(data => {
      console.log(data);
      this.data = data;
    });

    /*return this.http.post('https://amicus-lex.herokuapp.com//search', {
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
*/
    /*return this.http
      .post('https://amicus-lex.herokuapp.com/login', emailadress, password)
      .map(response => response.json());
      console.log(this.http);
  }*/
  }

  getData(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getThemes(){
    this.getData().subscribe(data =>{
      this.themes= data;
      console.log(this.themes);      
    })
  }


  ngOnInit() {
  }

}