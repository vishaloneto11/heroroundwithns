import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private getbyid: ActivatedRoute) {

  }
  ngOnInit(): void {
    console.log("Helooooooooooooooooooooooooooooooo", this.getbyid)
    let id = this.getbyid.snapshot.params["id"];

  }
}
