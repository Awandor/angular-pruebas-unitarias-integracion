import {EventEmitter} from '@angular/core';

export class Jugador2 {

  hp: number;

  hpCambia = new EventEmitter<number>();

  constructor() {

    this.hp = 100;

  }

  recibeGolpes(golpes: number) {

    if (golpes >= this.hp) {

      this.hp = 0;

    } else {

      this.hp -= golpes;
    }

    this.hpCambia.emit(this.hp);

  }

}
