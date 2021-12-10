import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  
  getAll(){
    return this._http.get('http://localhost:8080/notes');
  }

  add(newData: any) {
    return this._http.post('http://localhost:8080/notes', newData);
  }
}