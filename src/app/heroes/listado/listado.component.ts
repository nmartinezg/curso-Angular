import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})

export class ListadoComponent {
   public heroes:string[] =['Spiderman', 'Ironman','Hulk', 'Thor'];
   public hereoBorrado:string='';


   public borrarElemento():void {
     //borrar el ultimo elemento del arreglo
    //this.heroes.pop();

    //borra el primer elemento del arreglo
    this.hereoBorrado= this.heroes.shift() || '';
    
   }
}
