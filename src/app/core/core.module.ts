import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({ 
  imports:
    [
      CommonModule,
      CoreRoutingModule
    ],
    exports: [
      RouterModule, // ?
      HeaderComponent // ?
    ],
  declarations:
    [
      LoginComponent,
      HeaderComponent,
      NotFoundComponent
    ]
})
export class CoreModule { }
