import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.address == undefined || user.email == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
