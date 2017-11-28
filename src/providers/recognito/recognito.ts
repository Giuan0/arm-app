import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
  Generated class for the RecognitoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecognitoProvider {

  globalLink: string = 'http://192.168.0.108:3000';
  constructor(public http: Http) {
    console.log('Hello RecognitoProvider Provider');
  }

  getGlobalLink(): string{
    return this.globalLink;
  }

  setGlobalLink(link: string): void{
    this.globalLink = link;
  }

  public getPerson(image){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.post(this.globalLink+'/v1/search', {image: image})
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

}
