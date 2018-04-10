import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  urlBase: string = "";

  constructor(private _http: Http) { }

  Post(url: string, formData: FormData) 
  {
    let headers = new Headers();
    
    let options = new RequestOptions({headers: headers });
    
    return this._http.post(this.urlBase + url,formData,options)
    .map(res => res.json());
  }
}
