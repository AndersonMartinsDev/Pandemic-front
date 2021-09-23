import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SecurityRoutingModule,
    CommonModule
  ]
})
export class SecurityModule { }
