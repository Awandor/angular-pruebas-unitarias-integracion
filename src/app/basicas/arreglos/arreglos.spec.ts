import { obtenerRobots } from './arreglos';

describe('Pruebas de booleanos', () => {

  it('debería retornar un booleano', () => {

    const resp = obtenerRobots();

    expect((typeof resp) === 'object').toBe(true); // En js los arreglos son de tipo object

    expect(typeof resp).toBe('object'); // otra forma

  });

  it('debería retornar el arreglo de robots', () => {

    const robots = ['MegaMan', 'Jarvis', 'Robocop'];

    const resp = obtenerRobots();

    expect(resp).toEqual(robots);

  });

  it('debería retornar un arreglo de al menos tres elementos', () => {

    const resp = obtenerRobots();

    expect(resp.length).toBe(3); // es un poco delicado ya que se pueden añadir robots en el futuro

    expect(resp.length).toBeGreaterThanOrEqual(3);

  });

  it('debería retornar un arreglo con el elemento Jarvis y Robocop', () => {

    const resp = obtenerRobots();

    expect(resp.includes('Jarvis')).toBe(true);
    expect(resp.includes('Robocop')).toBe(true);

    expect(resp).toContain('Jarvis');
    expect(resp).toContain('Robocop');

  });

});
