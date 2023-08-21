import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowNewServer =false;
  serverCreationStatus = "No server was created!";
  ServerName = "";
  ServerCreated = false;
  Servers = ["Test Server" , "Test Server 2"];

  constructor(){
    setTimeout( ()=>{
      this.allowNewServer = true; 
    }  ,2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer()
  {
    this.ServerCreated = true;
    this.Servers.push(this.ServerName);
    this.serverCreationStatus = "server was created! Name is: " + this.ServerName;
  }

  // onupdateServerName(event : Event)
  // {
  //   console.log(event);
  //   this.ServerName = (<HTMLInputElement>event.target).value;
  // }
}
