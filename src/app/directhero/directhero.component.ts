import { Component } from '@angular/core';

@Component({
  selector: 'app-directhero',
  templateUrl: './directhero.component.html',
  styleUrls: ['./directhero.component.css']
})
export class DirectheroComponent {

  users: any = [{ id: 1, name: "vishal", city: "delhi" },
  { id: 2, name: "kumar", city: "Lonavala" },
  { id: 3, name: "sonu", city: "Kolkata" },
  { id: 4, name: "mohit", city: "Mumbai" },
  { id: 5, name: "panchal", city: "Surat" },
  { id: 6, name: "ajay", city: "UP" },
  { id: 7, name: "suv", city: "haryana" },
  { id: 8, name: "chahhel", city: "Puna" },
  { id: 9, name: "punit", city: "MK" },
  { id: 10, name: "subhum", city: "LA" },
  ]

  country: any = [
    { code: "IN", name: "India" },
    { code: "US", name: "United State of America" },
    { code: "TJK", name: "Tajakistan" },
    { code: "JAP", name: "Japan" },
    { code: "KR", name: "Korea" },
    { code: "PH", name: "Phillphinnes" },
    { code: "IRR", name: "Iran" },
    { code: "IR", name: "Iraq" },
    { code: "SI", name: "Southindia" },
    { code: "EN", name: "Europe" },
  ]

  isUserLoggedIn: boolean = false;
  selectedCountry: string = ' ';

  onLoginfun() {
    this.isUserLoggedIn = true;
  }
  onChange(e: any) {
    this.selectedCountry = e.target.value;

  }


  // users: string[] = ["vishal", "nitish", "kumar", "monu", "vishal", "nitish", "kumar", "monu", "vishal", "nitish", "kumar", "monu"]
}
