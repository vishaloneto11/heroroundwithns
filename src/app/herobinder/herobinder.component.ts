import { Component, OnInit } from '@angular/core';
import { EmployDetailsService } from '../services/employ-details.service';
@Component({
  selector: 'app-herobinder',
  templateUrl: './herobinder.component.html',
  styleUrls: ['./herobinder.component.css']
})
export class HerobinderComponent implements OnInit {

  pageTitle: string = "Welcome to Data Binding Section";
  imageUrl: string = "assets/images/header.jpg"
  username: string = " ";
  employee: any[] = [];

  onClickfn() {
    this.pageTitle = "DATA IS OIL TO BIND"
  }
  onAdduserfun() {

  }
  constructor(private employeService: EmployDetailsService) {

  }

  ngOnInit(): void {
    this.employee = this.employeService.getAllUser();
  }

}

// i want to use particular services in more than two component