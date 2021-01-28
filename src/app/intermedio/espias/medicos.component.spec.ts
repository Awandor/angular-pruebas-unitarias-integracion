import { Observable, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;

  const servicio = new MedicosService(null); // necesita un argumento como esto es para una prueba unitaria ponemos null

  // no vamos a usar http en la prueba por eso podemos pasar null

  beforeEach(() => {

    componente = new MedicosComponent(servicio); // necesita el argumento

  });


  it('debería cargar los médicos en el inicio', () => {

    // Aquí entra el concepto de espía, spyOn es una instrucción que nos permite hacer peticiones falsas cuando algo suceda
    // vamos a espíar el servicio, cuando se llame 'getMedicosService' se llamará en vez a callFake que ejecuta un callback

    spyOn(servicio, 'getMedicosService').and.callFake(() => {

      return from([['medico1', 'medico2', 'medico3']]);

    });

    // Angular no dispara automáticamente ngOnInit al crear el componente de esta manera
    // El constructor sí se dispara

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);

  });


  it('debería llamar al servicio agregarMedicoService al agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedicoService').and.callFake(() => {

      return new Observable(); // No nos interesa el resultado, sólo saber si se dispara

    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();

  });


  it('debería agregar un nuevo médico al arreglo medicos', () => {

    // Vamos a manejar las respuestas positivas de un observable

    componente.medicos = [{id: '1', nombre: 'Pedro'}, {id: '2', nombre: 'Ramón'}, {id: '3', nombre: 'María'}];

    const medicoNuevo = {id: '4', nombre: 'Rubén'};

    spyOn(servicio, 'agregarMedicoService').and.returnValue(from([medicoNuevo]));

    componente.agregarMedico();

    // console.log('agregarMedico', componente.medicos);

    expect(componente.medicos.length).toBe(4);

    // Nos aseguramos de que medicoNuevo se ha añadido con sus valores

    expect(componente.medicos.indexOf(medicoNuevo)).toBeGreaterThanOrEqual(0);

  });


  it('debería mostrar el error', () => {

    // Vamos a manejar las respuestas de error de un observable

    const miError = 'No se puedo agregar el médico';

    spyOn(servicio, 'agregarMedicoService').and.returnValue(throwError(miError));

    // En el componente el arreglo medicos está vacío

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);

  });


  it('debería llamar al servicio borrarMedicoService al borrar un médico', () => {

    const espia = spyOn(servicio, 'borrarMedicoService').and.callFake(() => {

      return new Observable(); // No nos interesa el resultado, sólo saber si se dispara

    });

    // Vamos a simular que hemos pinchado OK en la ventanita de confirmación

    spyOn(window, 'confirm').and.returnValue(true);

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');

  });

  it('NO debería llamar al servicio borrarMedicoService al borrar un médico', () => {

    const espia = spyOn(servicio, 'borrarMedicoService').and.callFake(() => {

      return new Observable(); // No nos interesa el resultado, sólo saber si se dispara

    });

    // Vamos a simular que hemos pinchado CANCEL en la ventanita de confirmación

    spyOn(window, 'confirm').and.returnValue(false);

    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');

  });

  // No consigo hacerlo funcionar, en el curso no lo hacen

  /* it('debería borrar el médico del arreglo medicos', () => {

    // Vamos a manejar las respuestas positivas de un observable

    componente.medicos = [{id: '1', nombre: 'Pedro'}, {id: '2', nombre: 'Ramón'}, {id: '3', nombre: 'María'}];

    const medicoParaBorrar = {id: '1', nombre: 'Pedro'};

    spyOn(servicio, 'borrarMedicoService').and.returnValue(from([[{id: '2', nombre: 'Ramón'}, {id: '3', nombre: 'María'}]]));

    // Vamos a simular que hemos pinchado OK en la ventanita de confirmación

    spyOn(window, 'confirm').and.returnValue(true);

    // En el componente el arreglo medicos tiene 3 médicos

    componente.borrarMedico('1');

    console.log(componente.medicos);

    // expect(componente.medicos.length).toBe(1);

    // Nos aseguramos de que medicoNuevo se ha añadido con sus valores

    // expect(componente.medicos.indexOf(medicoNuevo)).toBeGreaterThanOrEqual(0);

  }); */

});
