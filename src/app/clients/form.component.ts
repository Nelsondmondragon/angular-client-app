import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientServ } from './client.service'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public client: Client = new Client();
  public title: string = "Create Client";
  constructor(private clientServ: ClientServ,
    private router: Router,
  private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this.activetedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.clientServ.getClient(id).subscribe(
            (client) => this.client = client
          )
        }
      }
    )
  }

  public create(): void {
    this.clientServ.create(this.client).subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal.fire('Created Client', `Client ${client.name} created with success`, 'success')
      }
    )
  }

  update():void{
    this.clientServ.update(this.client)
    .subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal.fire('Client Update', `Client ${client.name} updated`, 'success')
      }
    )
  }
}
