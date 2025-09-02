import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppUser {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  login(data:any){
    return this.httpClient.post(this.url+"/appUser/login",data,{
      headers: new HttpHeaders().set('Content-Type','application/json')
    })
  }
}
