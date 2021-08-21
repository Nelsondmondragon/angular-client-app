import { Component} from '@angular/core';
import {Client} from './client'
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent  {

  clients: Client[] = [
    {id:1, name:'Nelson',surName:'Cortes', email:'nelsondmondragon@gmail.com', createAt:'2021-08-21'},
    {id:2, name:'Gustavo',surName:'Cortes', email:'nelsondmondragon@gmail.com', createAt:'2021-08-21'},
    {id:1, name:'Cristian',surName:'Cortes', email:'nelsondmondragon@gmail.com', createAt:'2021-08-21'}
  ];

  constructor() {


  }


}
