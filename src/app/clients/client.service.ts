import { Injectable } from '@angular/core';
import { CLIENTS } from './clients.json';
import { Client } from './client';
import {of,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServ {
  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
