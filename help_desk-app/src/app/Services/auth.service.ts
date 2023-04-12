import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {environment} from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  endpoint = environment.Apiendpoint;
  constructor(private http:HttpClient) { }

  GetUser(UserId , Password){
    return this.http.get(`${this.endpoint}/AllUsers`)
  }
}
