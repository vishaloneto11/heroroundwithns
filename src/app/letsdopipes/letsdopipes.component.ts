import { Component, OnInit } from '@angular/core';
import { EmployDetailsService } from '../services/employ-details.service';

@Component({
  selector: 'app-letsdopipes',
  templateUrl: './letsdopipes.component.html',
  styleUrls: ['./letsdopipes.component.css']
})
export class LetsdopipesComponent implements OnInit {
  pageTitles: string = "Pipes";
  employDetails: any[] = [];
  //  onlin api hit
  onlineUserWeb: any;

  clientUser: any[] = [
    { id: 101, name: 'john', city: 'DELHI', salary: 2000, dob: new Date("05/10/1989") },
    { id: 102, name: 'peter', city: 'PUNE', salary: 80000, dob: new Date("05/12/1985") },
    { id: 103, name: 'omed', city: 'GOA', salary: 190000, dob: new Date("10/10/1991") },
    { id: 104, name: 'kunal', city: 'DELHI', salary: 55000, dob: new Date("12/18/1987") }

  ]
  //  here we implement first time services
  constructor(private employeService: EmployDetailsService,) {

  }

  ngOnInit(): void {
    this.employDetails = this.employeService.getAllUser();
    this.employeService.getWebUser().subscribe(
      (data) => {
        this.onlineUserWeb = data;
      }
    )

  }


}
