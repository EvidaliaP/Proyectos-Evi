import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientesinterface } from 'src/app/interface/Clientesinterface';


@Injectable({
  providedIn: 'root'
})
export class ClientesservicioService {

  constructor(
    private http: HttpClient
  ) { }

   getClientes(): Observable<Clientesinterface[]> {
    return this.http.get<Clientesinterface[]>('https://fast-caverns-63520.herokuapp.com/api/user');
  }
}

