import { Component } from '@angular/core';
// mplementa una aplicación que permita cargar dos valores numéricos y mediante un control select indicar si queremos sumar, restar, multiplicar o dividir. Actualiza el resultado inmediatamente cuando se seleccione la operación del control select. Utiliza directivas estructurales para el desarrollo de la aplicación.
// -	El resultado de cada operación debe tener un color de fuente distinto. Utiliza directivas de atributo (ngStyle) para modificar el color del texto.
// -	Si el usuario no selecciona ninguna opción, tendremos el siguiente resultado
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-9';
  num1: number = 0;
  num2: number = 0;
  operacion: string = '';
  resultado: number = 0;

  calcular() {
    console.log(this.num1);
    console.log(this.num2);
    console.log(this.operacion);
    let res: number;
    switch (this.operacion) {
      case 'sumar':
        res = this.num1 + this.num2;
        break;
      case 'restar':
        res = this.num1 - this.num2;
        break;
      case 'multiplicar':
        res = this.num1 * this.num2;
        break;
      case 'dividir':
        res = this.num1 / this.num2;
        break;
      default:
        res = 0;
        break;
    }
    console.log(res);
    this.resultado = res;
  }
}
