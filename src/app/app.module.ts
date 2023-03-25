import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './paginas/header/header.component';
import { BodyComponent } from './paginas/body/body.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { AdministradorComponent } from './paginas/administrador/administrador.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
