import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder:9500
    },
    {
      nombre:'Gohan',
      poder:5500
    }
  ]

  nuevo:Personaje={
    nombre:"Gohan",
    poder:2000
  }

  //constructor

  



}
