import { Routes } from "@angular/router";

export default [
    {
        path: 'ejemplo1',
        loadComponent: () => import('./ejemplo1/ejemplo1.component').then(m => m.Ejemplo1Component),
    },
    {
        path: 'horoscopochino',
        loadComponent: () => import('./horoscopochino/horoscopochino.component').then(m => m.HoroscopochinoComponent),
    },
] as Routes;
