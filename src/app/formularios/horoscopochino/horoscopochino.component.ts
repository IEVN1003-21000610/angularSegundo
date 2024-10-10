import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-horoscopochino',
  standalone: true,
  imports: [],
  templateUrl: './horoscopochino.component.html',
  styles: ``
})

export class HoroscopochinoComponent implements OnInit{
  formulario: FormGroup;
  edad: number | undefined;
  signoChino: string | undefined;
  nombreJunto: string | undefined;
  imagenSignoChino: string | undefined;

  constructor() 
  {
    this.formulario = new FormGroup(
      {
      nombreu: new FormControl('', Validators.required),
      apellidop: new FormControl('', Validators.required),
      apellidom: new FormControl('', Validators.required),
      diaN: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mesN: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      anioN: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      genero: new FormControl('Masculino', Validators.required) 
    }
  );
  }

  ngOnInit(): void {}

}
 

