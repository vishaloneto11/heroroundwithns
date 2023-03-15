import { Component } from '@angular/core';

@Component({
  selector: 'app-herobinder',
  templateUrl: './herobinder.component.html',
  styleUrls: ['./herobinder.component.css']
})
export class HerobinderComponent {

  pageTitle: string = "Welcome to Data Binding Section";
  imageUrl: string = "assets/images/header.jpg"
  username: string = " "
  onClickfn() {
    this.pageTitle = "DATA IS OIL TO BIND"
  }
  onAdduserfun(){
    
  }
}
