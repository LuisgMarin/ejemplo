import { Component } from '@angular/core';
import { Data } from 'src/app/service/data/data';
import { FutbolNombreEstudiantesService } from 'src/app/service/futbol-nombre-estudiantes.service';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css'],
  providers: [FutbolNombreEstudiantesService]
})
export class InterfazComponent {
  datos: Data[];
  constructor(private futbolService: FutbolNombreEstudiantesService) { }

  ngOnInit() {
    this.datos = this.futbolService.getHeroes();
  }
}
