import { Component, OnInit } from '@angular/core';
import { MetodosServicio } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   nombre:string
   tipousuario:string;
  constructor(private metodos:MetodosServicio) { }

  ngOnInit(): void {
    this.nombre= this.metodos.usuarioC
    this.tipousuario=this.metodos.tuser;
  }

  CerrarSesion(){
    this.metodos.logout()
  }

}
