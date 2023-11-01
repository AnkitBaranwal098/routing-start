import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    // But this approach has the same challenges that Angular will not reinstantiate the component and re render it with updated query provied we are currently on the same component and somehow updating the query parameters from there
    // This approach is not reactive to any changes once we are on the component and updating the query params from there

    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)

    //Approach 2 for retrieving query params

    // Just like we have params as observables similarly we have queryParams and fragment as observables

    this.route.queryParams.subscribe()
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
