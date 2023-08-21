import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

   serverId : number = 10;
   serverStatus : string = "Offline!";

   constructor()
   {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
   }

   getServerstatus(){
    return this.serverStatus;
   }

   getcolor()
   {
      return this.serverStatus === "Online" ? "green" : "red";
   }
}