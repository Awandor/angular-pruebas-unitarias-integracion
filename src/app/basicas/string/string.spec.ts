import { mensaje } from './string';



describe( 'Pruebas de strings', () => {

  it( 'debería retornar un string', () => {

    const resp = mensaje( 'Dan' );

    expect( ( typeof resp ) === 'string' ).toBe( true );

    expect( typeof resp ).toBe( 'string' ); // otra forma

  } );

  it( 'debería retornar el texto esperado', () => {

    const nombre = 'Dan';

    const resp = mensaje( nombre );

    expect( resp ).toBe( `Saludos ${nombre}` );

    expect( resp ).toContain( nombre ); // Es mejor evaluarlo así

  } );

} );
