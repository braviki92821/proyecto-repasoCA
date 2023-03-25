import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { BodyComponent } from './paginas/body/body.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { esadministrador } from './servicios/administrador.guard';
import { esUsuario } from './servicios/usuario.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'catalogo',component:CatalogoComponent,canActivate:[esUsuario]},
  {path:'inicio',component:BodyComponent,canActivate:[esUsuario]},
  {path:'administrador',component:AdministradorComponent,canActivate:[esadministrador]},
  {path:'**',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
