import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe( 'Pruebas en Formulario', () => {

  let componenteFormulario: FormularioRegister;

  beforeEach( () => {

    componenteFormulario = new FormularioRegister( new FormBuilder() );

  } );

  it( 'debería crear un formulario con dos campos', () => {

    expect( componenteFormulario.form.contains( 'email' ) ).toBe( true );
    expect( componenteFormulario.form.contains( 'password' ) ).toBe( true );

  } );

  it( 'debería tener el campo email obligatorio', () => {

    const control = componenteFormulario.form.get( 'email' );

    control.setValue( '' ); // El campo no es válido al estar vacío

    expect( control.valid ).toBe( false );

  } );

  it( 'debería tener el campo password obligatorio', () => {

    const control = componenteFormulario.form.get( 'password' );

    control.setValue( '' ); // El campo no es válido al estar vacío

    expect( control.valid ).toBe( false );

  } );

  it( 'debería tener el campo email un email válido', () => {

    const control = componenteFormulario.form.get( 'email' );

    control.setValue( 'test@test.es' );

    expect( control.valid ).toBe( true );

    control.setValue( 'test' );

    expect( control.valid ).toBe( false );

  } );

} );
