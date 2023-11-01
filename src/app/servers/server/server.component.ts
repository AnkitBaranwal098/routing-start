import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(1);
    this.route.params.subscribe((params:Params)=>{
      this.server = this.serversService.getServer(+params['id'])
    })
  }
  onEdit(){
    // Absolute Path
    // this.router.navigate(['/servers', this.server.id, 'edit'])

    //Relative Path
    
    // When we are not using queryParamsHandling property which takes either of two values preserve or merge the allowEdit value is not passed to the url further and hence we cannot access or use this value.So we set it's value to preserve to preserve the query params passed to the url.

    // preserve = > query params value is preserved and passed to the Url
    // merge => the query params is merged with the new value

    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling:"preserve"})
  }

}
