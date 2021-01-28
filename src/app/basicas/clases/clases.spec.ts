import { Jugador } from './clases';

describe('Pruebas de clases', () => {

  const jugador = new Jugador();

  // beforeAll()

  // afterAll()

  // afterEach()

  beforeEach(() => {

    jugador.hp = 100;

  });

  it('debería retornar 80 de hp si recibe 20 golpes', () => {

    expect(jugador.recibeGolpes(20)).toBe(80);

  });

  it('debería retornar 50 de hp si recibe 50 golpes', () => {

    // jugador.hp ahora tiene valor 80 después de la prueba anterior

    // jugador.hp = 100;

    expect(jugador.recibeGolpes(50)).toBe(50);

  });

  it('debería retornar 0 de hp si recibe más de 100 golpes', () => {

    expect(jugador.recibeGolpes(150)).toBe(0);

  });

});
