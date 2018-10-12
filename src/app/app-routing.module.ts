import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpleadoComponent} from './dashboard/dashboard/empleado/empleado.component';

// Route Configuration
export const routes: Routes = [
  { path: 'Empleado', component: EmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

