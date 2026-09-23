/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */
import {COLORS} from "../helpers/colors.ts";


interface Ability {
  use():void;
}

class SwordAttack implements Ability {
  use(): void {
    console.log("Ataca con una %cespada ferozmente", COLORS.blue)
  };

}

class MagicSpell implements Ability {
  use(): void {
    console.log("Magic %cSpell", COLORS.green);
  }
}

class AxeAttack implements Ability {
  use(): void {
    console.log("Ataca con una %chacha brutalmente", COLORS.red)
  };

}

class FireballSpell implements Ability {
  use(): void {
    console.log("fire %cball", COLORS.green);
  }
}

abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  };

  setAbility(ability: Ability): void {
    this.ability = ability;
  };

  abstract performAbility(ability: Ability): void
}


class Warrior extends Character {
  override performAbility(ability: Ability): void {
    console.log("Warrior", COLORS.green);
    this.ability.use();
  }

}

class Mage extends Character {
  override performAbility(ability: Ability): void {
    console.log("Mage", COLORS.yellow);
    this.ability.use();
  }

}

function main(){
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();

  warrior.setAbility(new AxeAttack());

  warrior.performAbility();


  const mage = new Mage(new MagicSpell());
  mage.performAbility();

  mage.setAbility(new FireballSpell());
  mage.performAbility()

};

main();