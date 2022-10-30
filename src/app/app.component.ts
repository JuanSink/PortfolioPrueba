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

  @ViewChild('seccionInfo') seccionInfo: ElementRef | any;
  @ViewChild('seccionHabilidades') seccionHabilidades: ElementRef | any;
  @ViewChild('seccionContacto') seccionContacto: ElementRef | any;

}
