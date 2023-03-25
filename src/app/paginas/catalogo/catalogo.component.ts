import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/modelos/Juegos.models';
import { MetodosServicio } from 'src/app/servicios/metodos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  juegos:Juegos[];

  constructor(private metodos:MetodosServicio) { 
    this.juegos=this.metodos.juegos;
  }

  ngOnInit(): void {
    console.log(this.juegos)
  }

}
