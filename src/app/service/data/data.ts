export class Data {
  nombre: string;
  bio: string;
  img: string;
  nacimiento: string;
  seleccion: string;
  equipo: string;


  constructor(nombre: string, bio: string, img: string, nacimiento: string, seleccion: string, equipo: string) {
    this.nombre = nombre;
    this.bio = bio;
    this.img = img;
    this.nacimiento = nacimiento;
    this.seleccion = seleccion;
    this.equipo = equipo;
  }
}
