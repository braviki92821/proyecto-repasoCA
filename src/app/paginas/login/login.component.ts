import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personas } from 'src/app/modelos/Personas.model';
import { MetodosServicio } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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

  Login({value}:{value:Personas}){
    console.log(value)
    this.metodos.Login(value.nombre,value.password)
  }
  

}
