import { Component, OnInit } from '@angular/core';
import { ClientesservicioService } from 'src/app/servicio/clientesservicio.service';
import { Clientesinterface } from 'src/app/interface/Clientesinterface';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:Clientesinterface[] = [];
  constructor(private _clienteServicio :  ClientesservicioService) {
  }

  ngOnInit(): void {
    this._clienteServicio.getClientes().subscribe(data =>{
      this.clientes = data;
    })
  }

}
