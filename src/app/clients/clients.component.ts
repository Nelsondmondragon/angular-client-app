import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientServ } from './client.service';
import Swal from 'sweetalert2';
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

  delete(client: Client): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientServ.delete(client.id).subscribe(
          response => {
            this.clients = this.clients.filter(cli => cli.id !== client.id);
            swalWithBootstrapButtons.fire(
              'Deleted!',
              `${client.name} client successfully removed`,
              'success'
            )
          }
        )
      }
    })
  }
}
