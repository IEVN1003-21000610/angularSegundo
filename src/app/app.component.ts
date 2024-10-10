import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { HoroscopochinoComponent } from "./formularios/horoscopochino/horoscopochino.component";

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet,
     Ejemplo1Component, 
     HoroscopochinoComponent,
     ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}



