import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // To get access to our Angular Router we inject the router
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    console.log("Button clicked")
    this.router.navigate(["/servers"])
  }

}
