import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  datosUsuario : object = {
    id: 1,
    nombre: 'FEDE'

  }

  @ViewChild('intro') intro: ElementRef | any;
  @ViewChild('intro2') intro2: ElementRef | any;


vamosABerisso(){

  
  alert('Estas a punto a salir');

  window.open ('http://berisso.gob.ar/');

}

}
