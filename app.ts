// Crear interfaces
interface Vehicle {
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Vehicle): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Vehicle = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
interface Guason {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}
// utilizando propiedades opcionales

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface GothamFn {
  (ciudadanos:string[]): number;
}

 

const ciudadGotica: GothamFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase

interface IPersona {
  nombre: string,
  edad: number,
  sexo: string
  estadoCivil: string
  imprimirBio(): void // en consola una breve descripcion.  

}
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona {

  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {

  }
  imprimirBio(): void {
    console.log(`${this.nombre} de ${this.edad} es ${this.sexo} y de estado civil ${this.estadoCivil} `);
  }
}

const personaSl = new Persona('Norbert', 23, 'Masculino', 'casado');
personaSl.imprimirBio()