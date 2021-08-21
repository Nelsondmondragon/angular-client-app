import { Component} from '@angular/core';
import {Client} from './client';
import {CLIENTS} from './clients.json';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent  {

  clients: Client[];

  constructor() {

    this.clients=CLIENTS;

  }


}
