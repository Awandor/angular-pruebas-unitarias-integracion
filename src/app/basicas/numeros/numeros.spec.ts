import { incrementar } from './numeros';


describe('Pruebas de números', () => {

  it('debería retornar un número', () => {

    const resp = incrementar(10);

    expect((typeof resp) === 'number').toBe(true);

    expect(typeof resp).toBe('number'); // otra forma

  });

  it('debería retornar 100 si el número es mayor a 100', () => {

    const resp = incrementar(300);

    expect(resp).toBe(100);

  });

  it('debería retornar el número ingresado + 1 si el número es menor o igual a 100', () => {

    const resp = incrementar(100);

    expect(resp).toBe(101);

  });

});
