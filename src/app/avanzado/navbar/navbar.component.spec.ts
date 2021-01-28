import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes( [] )
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'debería de tener un link a la página médicos', () => {

    // const fixture = TestBed.createComponent( AppComponent );

    const elementArray = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );

    // console.log( elementArray[ 0 ].attributes.routerLink );

    let existe = false;

    for ( const element of elementArray ) {

      if ( element.attributes.routerLink === '/medicos' ) {

        existe = true;

        break; // importante para que no siga recorriendo el arreglo

      }

    }

    expect( existe ).toBeTruthy();

  } );

});
