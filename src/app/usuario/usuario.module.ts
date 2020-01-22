import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:
    [
      CommonModule,
      UsuarioRoutingModule
    ],
  declarations:
    [
      UsuarioComponent,
      HomeComponent
    ]
})
export class UsuarioModule { }
