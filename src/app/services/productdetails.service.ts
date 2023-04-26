import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http: HttpClient) { }

  getallProduct() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
