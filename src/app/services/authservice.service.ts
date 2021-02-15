import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor() { }
  isAuthenticated() {
    // const accessToken = localStorage.getItem('accessToken');
    let accessToken = '';
    if (accessToken && accessToken !== '') {
      return true;
    }
    return false;
  }
}
