import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  articles: any;

  constructor(public http: HttpClient) {

  }

  get_request() {
      console.log("aya");
      this.http.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=bb4b99213d39444599aba09a983395f2'
      ).subscribe((res: any) => {
      this.articles = res.articles;
      });

  }

  post_request() {
    console.log("post aya");
    // this.http.post('https://jsonplaceholder.typicode.com/posts/1')
  }

}
