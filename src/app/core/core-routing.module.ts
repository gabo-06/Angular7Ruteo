import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'form',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'usuario',
      // canActivate: [AuthGuardService],
      loadChildren: '../usuario/usuario.module#UsuarioModule'
    },
    {
      path: 'admin',
      // canActivate: [AuthGuardService],
      loadChildren: '../admin/admin.module#AdminModule'
    },
    {
      path: 'form',
      loadChildren: '../form/form.module#FormModule'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
