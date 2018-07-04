import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2', 'TestServer 3'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
