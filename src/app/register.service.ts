import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public url = 'https://api.myjson.com/bins/j7w4a'

  constructor(
    private http: HttpClient
  ) { }

  getAllUser() {
    return this.http.get(this.url);
  }

  registerUser(user) {
    return this.http.put(this.url, user);
  }
}
