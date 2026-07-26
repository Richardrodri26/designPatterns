/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from './../helpers/colors.ts';

class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string;

  displayConfiguration() {
    console.log(`Configuracion de la computadora
      CPU: ${this.cpu}
      RAM: ${this.ram}
      Storage: ${this.storage}
      GPU: ${this.gpu ?? 'no gpu defined'}
      `)
  }
}


class ComputerBuilder {

  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRam(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}


function main() {
  const basicComputer = new ComputerBuilder()
    .setCpu('Intel Core 2 duo')
    .setRam('8GB')
    .setStorage('256GB')
    .build();

  console.log('%cComputadora basica:', COLORS.blue)
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCpu('Intel Core i9')
    .setRam('32GB')
    .setStorage('1TB')
    .setGpu('NVIDIA RTX 3080')
    .build();

  console.log('%cComputadora de juego:', COLORS.blue)
  gamingComputer.displayConfiguration();

}




main();
