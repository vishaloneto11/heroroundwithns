import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployDetailsService {

  constructor(private http: HttpClient) { }

  getWebUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }


  getAllUser() {
    return [
      { id: 101, name: 'kashmir', city: 'DELHI', salary: 2000, dob: new Date("05/10/1989") },
      { id: 102, name: 'Ladak', city: 'PUNE', salary: 80000, dob: new Date("05/12/1985") },
      { id: 103, name: 'shimla', city: 'GOA', salary: 190000, dob: new Date("10/10/1991") },
      { id: 104, name: 'masoori', city: 'DELHI', salary: 55000, dob: new Date("12/18/1987") }

    ];
  }
}
