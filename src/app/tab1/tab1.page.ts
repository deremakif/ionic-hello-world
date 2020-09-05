import { Component, OnInit } from '@angular/core';

import { HTTP } from '@ionic-native/http';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  films: Observable<any>;

  constructor(public httpClient: HttpClient) {
    console.log('my data: hede ');
    print();

    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films
      .subscribe(data => {
        console.log('my data: ', data);

      })
  }

  response: string = "kkk";
  sendPostRequest() {

    this.films = this.httpClient.get('https://trustass.de/api/user/read_coins.php?id=1');
    // this.films = this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1');


    this.response = "geldi";

    this.films
      .subscribe((data) => {

        this.response = data["title"];


      });

    // this.response = "gitti";


  }



}
