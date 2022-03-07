import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent
{
    public nombre:string= 'Ironman';
    public edad:number= 50;

    public get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    public obtenerNombre():string{        
        return ` ${this.nombre} - ${this.edad}`;
    }

    public cambiarNombreHeroe(newNombre: string): void {
        this.nombre= newNombre;
    }

    public cambiarEdad(newEdad: number): void {
        this.edad= newEdad;
    }
}