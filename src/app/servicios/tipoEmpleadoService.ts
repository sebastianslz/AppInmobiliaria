import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoEmpleado } from '../models/tipoEmpleadoModel';

@Injectable({
    providedIn: 'root'
})


export class TipoEmpleadoService {

    //Ruta donde estan los servicios
    domain = 'http://localhost:4300/';

    constructor(private http: HttpClient) {
    }

    


}

