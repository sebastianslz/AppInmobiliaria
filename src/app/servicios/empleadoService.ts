import { map } from 'rxjs/operators';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleadoModel';

@Injectable({
    providedIn: 'root'
})

export class EmpleadoService {

    //Ruta donde estan los servicios
    domain = 'http://localhost:4300/';

    constructor(private http: HttpClient) {
    }

    //Obtenemos la lista de empleados
    listar() {
        return this.http.get<any>(this.domain + 'empleado/listarEmpleado')
            .pipe(
                map(res => {
                    return res;
                }
                )
            );
    }

    //Buscar empleado por cedula
    empleadoByCedula(empleado: Empleado) {
        return this.http.get<any>(this.domain + 'empleado/buscarEmpleadoCedula' + empleado.cedula).
            pipe(
                map(res => {
                    return res;
                })
            );
    }

    //Registrar empleado
    registrar(empleado: Empleado) {
        return this.http.post<any>(this.domain + 'empleado/registrarEmpleado', empleado)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    //Editar empleado
    editar(empleado: Empleado) {
        return this.http.post<any>(this.domain + 'empleado/editarEmpleado', empleado)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    
}
