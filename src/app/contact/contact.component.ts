import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formularioDeContacto: FormGroup | any;
 
  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.formularioDeContacto = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      mensaje: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }
  alEnviarMensaje() {
 
 
    if (this.formularioDeContacto.valid == true) {

      window.open('https://wa.me/' + 2216339719 + '?text=Hola, mi nombre es '
      + this.formularioDeContacto.value.nombre +
      '. Me quiero contactar con vos por lo siguiente:'
      + this.formularioDeContacto.value.mensaje, '_blank');
  } }

  }