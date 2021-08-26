import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientServ {
  private urlEndPoint: string = 'http://localhost:8090/spring-boot-backend/api/clients';

  private httpHeaders = new HttpHeaders({ 'content-type': 'application/json' })
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    //return of(CLIENTS);
    return this.http.get<Client[]>(`${this.urlEndPoint}/all`);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlEndPoint}/save`, client, { headers: this.httpHeaders });
  }

  getClient(id:number): Observable<Client>{
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`);
  }

  update(client:Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlEndPoint}/update/${client.id}`, client, {headers: this.httpHeaders });
  }

  delete(id:number): Observable<Client>{
    return this.http.delete<Client>(`${this.urlEndPoint}/delete/${id}`, {headers: this.httpHeaders});
  }
}
