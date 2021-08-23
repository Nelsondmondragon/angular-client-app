import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientServ } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients!: Client[];
  constructor(private clientServ: ClientServ) {

  }



  ngOnInit() {
    this.clientServ.getClients().subscribe(
      (clients) => {
        this.clients = clients
      }
    );
  }

}
