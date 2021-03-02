import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// is it always injected in the root???

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  justAcall = () => {
    return this.http.get('https://official-joke-api.appspot.com/random_ten')
  };
  
}
