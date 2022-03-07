import{Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h1>{{1+ 1}}</h1>
    <h3> la base es: <strong>{{base}}</strong></h3>

    <button (click)="ocomular(base)"> + {{base}}</button>
    <span> {{ numero }} </span>

    <button (click)="ocomular(-base)"> - {{base}}</button>
    `
})

export class ContadorComponent{
    public titulo:string = 'Contador App';

    public numero: number= 10;
    public base  : number=100;
  
    ocomular(argumento: number): void {
      this.numero +=argumento;    
    }

}