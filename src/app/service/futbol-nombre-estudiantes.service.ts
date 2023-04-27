import { Injectable } from '@angular/core';
import { Data } from './data/data';
import { DATA } from './data/data-data';

@Injectable({
  providedIn: 'root'
})
export class FutbolNombreEstudiantesService {
  constructor() { }

  getHeroes(): Data[] {
    return DATA;
  }

  getHeroe(nombre: string): Data {
    const dataEncontrada = DATA.find(data => data.nombre.toLowerCase() === nombre.toLowerCase());
    console.log(DATA.map(d => d.nombre)); // Imprime todos los nombres de los héroes en el archivo HEROES.ts
    return dataEncontrada || {nombre: '', bio: '', img: '', nacimiento: '', seleccion: '', equipo: '',};
  }
}


