import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  orders=true;
  favourite=false;
  address=false;
  payment=false;
  constructor() { }

  ngOnInit() {
  }
}
