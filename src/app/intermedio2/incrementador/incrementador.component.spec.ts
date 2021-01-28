import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe( 'Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ IncrementadorComponent ],
      imports: [ FormsModule ] // Necesitamos importar FormsModule porque usamos ngModel en el formulario
    } );

    fixture = TestBed.createComponent( IncrementadorComponent );
    component = fixture.componentInstance;

  } );

  it( 'debería mostrar la leyenda', () => {

    component.leyenda = 'Eureka';

    // Para las pruebas necesitamos disparar la detección de cambios

    fixture.detectChanges();

    // query retorna el primero que encuentra

    const element: HTMLElement = fixture.debugElement.query( By.css( 'h3' ) ).nativeElement;

    // console.log(element);

    expect( element.innerHTML ).toContain( component.leyenda );

  } );

  it( 'debería mostrar en el input el valor del progreso', async( () => {

    component.cambiarValor( 5 );

    // Para las pruebas necesitamos disparar la detección de cambios

    fixture.detectChanges();

    // Como la deteccíon de cambios puede durar un poco manejamos el resto como una promesa y metemos todo en un async zone

    fixture.whenStable().then( () => {

      // Atención: usamos el tipo HTMLInputElement para acceder a value

      const element: HTMLInputElement = fixture.debugElement.query( By.css( 'input[name="progreso"]' ) ).nativeElement;

      expect( element.value ).toBe( '55' );

    } );

  } ) );

  it( 'debería incrementar/disminuir con 5 con un click en el botón', () => {

    // Vamos a confirmar que los elementos HTML tengan los eventos deseados

    // Aqui no hace falta detectar los cambios ni esperar con async porque el evento click se encarga de todo

    const buttonArray: any[] = fixture.debugElement.queryAll( By.css( 'button' ) );

    // console.log(buttonArray[0].nativeElement);

    const botonDisminuir: HTMLInputElement = buttonArray[ 0 ].nativeElement;

    const botonAumentar: HTMLInputElement = buttonArray[ 1 ].nativeElement;

    botonDisminuir.click();

    // Otra forma de hacerlo

    buttonArray[ 0 ].triggerEventHandler( 'click', null );

    // console.log(component.progreso);

    expect( component.progreso ).toBe( 40 );

    botonAumentar.click();

    // console.log(component.progreso);

    expect( component.progreso ).toBe( 45 );

  } );


  it( 'debería incrementar/disminuir con 5 el elemento HTML con un click en el botón', () => {

    // Vamos a confirmar cambios en elementos HTML tras eventos

    const elementoHTML: HTMLElement = fixture.debugElement.query( By.css( 'h3' ) ).nativeElement;

    const buttonArray: any[] = fixture.debugElement.queryAll( By.css( 'button' ) );

    buttonArray[ 0 ].triggerEventHandler( 'click', null );

    // Para las pruebas necesitamos disparar la detección de cambios

    fixture.detectChanges();

    // console.log(elementoHTML);

    expect( elementoHTML.innerHTML ).toContain( '45' );

    buttonArray[ 1 ].triggerEventHandler( 'click', null );

    // Para las pruebas necesitamos disparar la detección de cambios

    fixture.detectChanges();

    // console.log(elementoHTML);

    expect( elementoHTML.innerHTML ).toContain( '50' );

  } );

} );
