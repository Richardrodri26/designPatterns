import { COLORS } from '../helpers/colors.ts';
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
  prepare(): void;

}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing Chicken %cHamburger', COLORS.yellow);
  }

}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing Beef %cHamburger', COLORS.red);
  }

}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing Bean %cHamburger', COLORS.blue);
  }

}

abstract class Restaurant {

  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }

}

class ChickenRestaurant extends Restaurant {

  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }

}

class BeefRestaurant extends Restaurant {

  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }

}

class BeanRestaurant extends Restaurant {

  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}


function main() {
  let restaurant: Restaurant;
  const burgerType = prompt("¿Que tipo de hamburguesas desea?\n\n1. Chicken\n2. Beef\n3. Bean");
  switch (burgerType) {
    case '1':
      restaurant = new ChickenRestaurant();
      break;
    case '2':
      restaurant = new BeefRestaurant();
      break;
    case '3':
      restaurant = new BeanRestaurant();
      break;
    default:
      throw new Error('¡Opción no válida!');
  }

  restaurant.orderHamburger();


}

main();