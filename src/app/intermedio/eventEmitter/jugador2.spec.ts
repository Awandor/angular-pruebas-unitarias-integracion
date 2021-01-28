import { Jugador2 } from './jugador2';

describe('Pruebas en Jugador 2 emit', () => {

  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2());

  it('debería emitir un evento cuando el jugador recibe golpes', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(resp => {

      nuevoHP = resp;

    });

    // Hacemos que emita el evento

    jugador.recibeGolpes(1000);

    expect(nuevoHP).toBe(0);

  });

  it('debería emitir un evento cuando el jugador recibe golpes y sobrevivir si es menos de 100', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe((resp: number) => {

      nuevoHP = resp;

    });

    // Hacemos que emita el evento

    jugador.recibeGolpes(40);

    expect(nuevoHP).toBe(60);

  });

});
