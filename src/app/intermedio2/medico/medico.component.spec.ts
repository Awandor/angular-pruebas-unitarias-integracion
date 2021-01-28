import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe( 'Pruebas en medico component', () => {

  let componente: MedicoComponent;

  let fixture: ComponentFixture<MedicoComponent>; // <MedicoComponent> es el tipo genérico

  beforeEach( () => {

    // componente = new MedicoComponent(); // No se hace así en las pruebas de integración

    // Para las pruebas de integración necesitamos que Angular compile para poder tener acceso al HTML y otros
    // componentes que este componente pueda estar utilizando.
    // Necesitamos que Angular compile esto y trabaje con su ciclo de detección de cambios, que use los pipes...

    // Para todo ello importamos testBed, es una clase que tiene un montón de métodos que nos ayudan a realizar
    // las pruebas de componentes de Angular. Lo primero es configurarlo, con configureTestingModule que es un módulo
    // que recibe como argumento un objeto

    TestBed.configureTestingModule( {
      declarations: [ MedicoComponent ], // los componentes que necesitamos para el test
      providers: [HttpClient, HttpHandler], // los servicios necesarios
      imports: [] // otros servicios u otros módulos
    } );

    // Ahora creamos el componente y le pasamos el tipo de Componente

    // TestBed.createComponent(MedicoComponent);

    // createComponent retorna un fixture que nos da acceso al HTML, a los componentes del DOM
    // para ello importamos ComponentFixture y declaramos la variable fixture más arriba

    fixture = TestBed.createComponent( MedicoComponent );

    componente = fixture.componentInstance;

  } );


  it( 'debería crearse el componente', () => {

    expect( componente ).toBeTruthy();

  } );


  it( 'debería retornar el saludo', () => {

    const nombre = 'jorge';

    const saludo = componente.saludarMedico( nombre );

    expect( saludo ).toBe( `Hola ${nombre}` );

  } );

} );
