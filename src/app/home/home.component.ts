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

  onLoadServer(id:number){
    console.log("Button clicked")
    // To add query params we pass it as js object as second argument for navigate function
    this.router.navigate(["/servers", id, 'edit'],{queryParams: {allowEdit: '10'},fragment: "Initialising"})
  }

}
