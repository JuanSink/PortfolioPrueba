import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() seccionInfo: any;
  @Input() seccionHabilidades: any;
  @Input() seccionContacto: any;

  
  constructor() { }

  ngOnInit(): void {
   
  }


   scrollToInfo() {
    this.seccionInfo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    }
    );
  
  }

  scrollToHabilidades() {
    this.seccionHabilidades.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });

  }

    scrollToContacto() {
      this.seccionContacto.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
    
  
  
  }
}
