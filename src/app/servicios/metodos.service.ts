import {Injectable} from'@angular/core'
import { Router } from '@angular/router';
import { Juegos } from '../modelos/Juegos.models'
import { Personas } from '../modelos/Personas.model'

@Injectable({ providedIn:'root'})
export class MetodosServicio{
juegos: Juegos[]=[ new Juegos('Gta V','Grand theft auto V','https://www.gratistodo.com/wp-content/uploads/2016/08/GTA-5-18.jpg',3000,true),
                    new Juegos('Gta IV','Grand theft Auto IV','https://wallpapercave.com/wp/a4CzcM6.jpg',2000,false)]

personas:Personas[]=[new Personas('Brandon Jared Ruiz Diaz','123456',22,'Administrador',[])]

usuarioC:string
tuser:string

constructor(private route:Router){
}

 añadirJuego(nuevoJuego:Juegos){
    this.juegos.push(nuevoJuego)
    console.log(nuevoJuego)
    console.log(this.juegos)
 }

 modificarJuego(id:number, nombre:string,descripcion:string,precio:number,disponible:boolean){
   this.juegos[id].nombre=nombre;
   this.juegos[id].descripcion=descripcion;
   this.juegos[id].precio=precio;
   this.juegos[id].disponible=disponible;
   console.log(this.juegos[id])
   alert('El juego con id: '+id+' mofificado correctamente')
 }

 eliminarJuego(id:number){
   this.juegos.splice(id,1);
 }

 Login(nombre:string,password:string){
  let user= this.personas.find(personas=>personas.nombre===nombre)
  console.log(user);
  if(user===undefined){
    alert('Usuario no exite')
  }else if(nombre===user.nombre && password === user.password){
      alert('Acceso correcto')
      this.usuarioC=user.nombre
      this.tuser=user.rool
      this.tipoUsuario();
      this.rutaUser();
  }else{
     alert('usuario o contraseña incorrecta')
  }
 }

 Registrarse(nuevoUsuario:Personas){
   this.personas.push(nuevoUsuario)
   alert('Cuenta creada exitosamente')
   this.route.navigate(['/login'])
 }

 tipoUsuario():string{
  return this.tuser;
 }
 
 rutaUser(){
  if(this.tuser==='Administrador'){
    this.route.navigate(['/administrador']);
  }else if(this.tuser==='Usuario'){
    this.route.navigate(['/catalogo']);
  }
 }

 logout(){
  this.usuarioC=''
  this.tuser=''
  this.route.navigate(['/login'])
 }

}