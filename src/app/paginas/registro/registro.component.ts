import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personas } from 'src/app/modelos/Personas.model';
import { MetodosServicio } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  personas:Personas={
    nombre: '',
    password: '',
    edad: 0,
    rool: '',
    amigos: []
  }
  @ViewChild("usuarioForm") usuarioForm:NgForm
  constructor(private metodos:MetodosServicio) { }

  ngOnInit(): void {
  }

  registrarCuenta({value}:{value:Personas}){
   value.rool='Usuario'
   value.amigos=[]
   console.log(value)
   this.metodos.Registrarse(value)
  }

}
