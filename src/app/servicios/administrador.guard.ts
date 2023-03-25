import {  Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MetodosServicio } from "./metodos.service";

@Injectable({providedIn:'root'})
export class esadministrador implements CanActivate{

    constructor( private metodos:MetodosServicio,private route:Router){}      
    canActivate(): boolean {
        let isUser:boolean
        if(this.metodos.tipoUsuario()==='Administrador'){
            isUser=true
        }else{
            this.route.navigate(['/']);
            isUser=false
        }
        return isUser
    }
    

}