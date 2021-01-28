import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { /* RouterLinkWithHref, */ RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe( 'AppComponent', () => {

  beforeEach( async( () => {

    TestBed.configureTestingModule( {
      declarations: [
        AppComponent,
        // NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes( [] )
      ],
      schemas: [NO_ERRORS_SCHEMA]
    } ).compileComponents();

  } ) );

  it( 'should create the app', () => {

    const fixture = TestBed.createComponent( AppComponent );

    const app = fixture.componentInstance;

    expect( app ).toBeTruthy();

  } );

  it( `should have as title 'pruebas-unitarias'`, () => {

    const fixture = TestBed.createComponent( AppComponent );

    const app = fixture.componentInstance;

    expect( app.title ).toEqual( 'pruebas-unitarias' );

  } );

  // Hemos borrado el código inicial de app.component.html

  /* it( 'should render title', () => {

    const fixture = TestBed.createComponent( AppComponent );

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect( compiled.querySelector( '.content span' ).textContent ).toContain( 'pruebas-unitarias app is running!' );

  } ); */

  it( 'debería de tener un router-outlet', () => {

    const fixture = TestBed.createComponent( AppComponent );

    const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ) );

    // console.log(debugElement);

    expect( debugElement ).not.toBeNull();

  } );

  // Hemos llevado la prueba a navbar.component.spec.ts pues pertence a ese componente

  /* it( 'debería de tener un link a la página médicos', () => {

    const fixture = TestBed.createComponent( AppComponent );

    const elementArray = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );

    console.log( elementArray[ 0 ].attributes.routerLink );

    let existe = false;

    for ( const element of elementArray ) {

      if ( element.attributes.routerLink === '/medicos' ) {

        existe = true;

        break; // importante para que no siga recorriendo el arreglo

      }

    }

    expect( existe ).toBeTruthy();

  } ); */

} );
