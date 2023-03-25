import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Juegos } from 'src/app/modelos/Juegos.models';
import { MetodosServicio } from 'src/app/servicios/metodos.service';
import {Validators} from '@angular/forms'

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  juegos:Juegos[]
  agregar:FormGroup

  constructor(private metodos:MetodosServicio,private fb:FormBuilder) { 
    this.juegos=this.metodos.juegos

    this.agregar=this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      imagen:['',Validators.required],
      precio:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarJuego(){
    let juego = new Juegos(this.agregar.value.nombre,this.agregar.value.descripcion,this.agregar.value.imagen,this.agregar.value.precio,true)
    if(this.agregar.invalid){
      alert('no deje campos vacios')
      return
    }
    this.metodos.añadirJuego(juego);
    this.agregar.reset();
  }

  modificarJuego(ide:any,nombre:any,descripcion:any,precio:any,disponible:any){
    let Id=Number(ide);
    let Nombre=String(nombre)
    let Descripcion=String(descripcion)
    let Precio=Number(precio)
    let Disponible = disponible === "false"? false:true; 
    this.metodos.modificarJuego(Id,Nombre,Descripcion,Precio,Disponible);
  }

  eliminarJuego(ide:any){
    let Id=Number(ide)
    this.metodos.eliminarJuego(Id);
  }

}
