
import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

  it('debería retornar un booleano', () => {

    const resp = usuarioIngresado();

    expect((typeof resp) === 'boolean').toBe(true);

    expect(typeof resp).toBe('boolean'); // otra forma

  });

  it('debería retornar true', () => {

    const resp = usuarioIngresado();

    expect(resp).toBe(true);

    expect(resp).toBeTruthy();

    expect(resp).not.toBeFalsy();

  });

});
