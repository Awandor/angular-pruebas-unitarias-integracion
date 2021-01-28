export class Jugador {

  hp: number;

  constructor() {

    this.hp = 100;

  }

  recibeGolpes(golpes: number) {

    if (golpes >= this.hp) {

      this.hp = 0;

    } else {

      this.hp -= golpes;
    }

    return this.hp;

  }

}
