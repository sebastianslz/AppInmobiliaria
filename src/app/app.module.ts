import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {LoginModule} from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { EmpleadoModule } from './dashboard/dashboard/empleado/empleado/empleado.module';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    DashboardModule,
    EmpleadoModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [
      
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
