import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horoscopochino',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './horoscopochino.component.html',
  styles: ``
})

export class HoroscopochinoComponent implements OnInit {
  formulario: FormGroup;
  edadu: number | undefined;
  signoChino: string | undefined;
  nombreJuntou: string | undefined;
  imagenSignoChino: string | undefined;

  constructor() {
    this.formulario = new FormGroup({
      nombreu: new FormControl('', Validators.required),
      apellidop: new FormControl('', Validators.required),
      apellidom: new FormControl('', Validators.required),
      diaN: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mesN: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      anioN: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      genero: new FormControl('Masculino', Validators.required)
    });
  }

  ngOnInit(): void {}

  edadCalculo(anioN: number, mesN: number, diaN: number): number {
    const today = new Date();
    let edadu = today.getFullYear() - anioN;
    const mesActual = today.getMonth() + 1;
    const diaActual = today.getDate();

    if (mesN > mesActual || (mesN === mesActual && diaN > diaActual)) {
      edadu--;
    }
    return edadu;
  }

  signochinoCalculo(anioN: number): string {
    const signosChinos = [
      "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente",
      "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"
    ];
    const indice = (anioN - 1900) % 12;
    return signosChinos[indice];
  }

  obtenerImagenSigno(signoChino: string): string {
    const imagenes: { [key: string]: string } = {
      Rata: "assets/simbolos/rata.png",
      Buey: "assets/simbolos/buey.png",
      Tigre: "assets/simbolos/tigre.png",
      Conejo: "assets/simbolos/conejo.png",
      Dragón: "assets/simbolos/dragon.png",
      Serpiente: "assets/simbolos/serpiente.png",
      Caballo: "assets/simbolos/caballo.png",
      Cabra: "assets/simbolos/cabra.png",
      Mono: "assets/simbolos/mono.png",
      Gallo: "assets/simbolos/gallo.png",
      Perro: "assets/simbolos/perro.png",
      Cerdo: "assets/simbolos/cerdo.png"
    };
    return imagenes[signoChino] || ''; 
  }

  onSubmit(): void {
    const { nombreu, apellidop, apellidom, diaN, mesN, anioN } = this.formulario.value;

    this.edadu = this.edadCalculo(anioN, mesN, diaN);
    this.signoChino = this.signochinoCalculo(anioN);
    this.nombreJuntou = `${nombreu} ${apellidop} ${apellidom}`;
    this.imagenSignoChino = this.obtenerImagenSigno(this.signoChino);
  }
}
