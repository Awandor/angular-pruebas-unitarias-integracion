import { IncrementadorComponent } from './incrementador.component';

describe( 'Pruebas unitarias en IncrementadorComponent', () => {

  let component: IncrementadorComponent;

  beforeEach( () => {

    component = new IncrementadorComponent();

  } );

  it( 'NO debería pasar de 100 del progreso', () => {

    component.progreso = 70;

    component.cambiarValor(20);

    // component.onChanges(component.progreso);

    console.log(component.progreso);

    expect(component.progreso ).toBe(90);

  } );

} );
