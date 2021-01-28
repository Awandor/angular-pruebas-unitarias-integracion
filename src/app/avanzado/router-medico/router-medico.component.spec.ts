import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, /* EMPTY, */ from } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

// ========================================
// Fake
// ========================================

class FakeRouter {

  navigate( params ) { } // el método no hace nada, sólo recibe parámetros

}

class FakeActivatedRoute {

  // params: Observable<any> = EMPTY; // tipo Observable que retorna any

  params: Observable<any> = from([{id: 'nuevo'}]);

}

describe( 'RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ RouterMedicoComponent ],
      providers: [ { provide: Router, useClass: FakeRouter }, { provide: ActivatedRoute, useClass: FakeActivatedRoute } ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( RouterMedicoComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'debería redireccionar a medico cuando se guarde', () => {

    const router = TestBed.inject( Router );

    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( [ 'medico', '123' ] );

  } );

  it( 'debería establecer el valor de id a "nuevo"', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.inject( ActivatedRoute );

    expect(component.id).toBe('nuevo');

  } );

} );
