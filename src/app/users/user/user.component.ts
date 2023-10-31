import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id : this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }
    // params is an observable which is a feature provided by other 3rd party library/package but heavily used by Angular which allows us to do asynchronous task easily

    // observable is an easy way to subscribe to an event which might happen in the future to then execute the code when happens without waiting to execute the code
    // This subscribe take 3 functions as arguments.First one is the function which get invoked or fired up whenever the parameters change this first function takes the updated params
    this.route.params.subscribe(
      (params: Params)=>{
        this.user.id = params["id"],
        this.user.name = params["name"]
      }
    )
  }

}
