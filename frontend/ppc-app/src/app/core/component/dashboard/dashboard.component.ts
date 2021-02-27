import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private location: Location) {
  }

  isShown = false;

  ngOnInit() {
  }


  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }

  getPath() {
    return this.location.path();
  }
}
