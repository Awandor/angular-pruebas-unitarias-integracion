import { MedicoComponent } from '../medico/medico.component';
import { RUTAS } from './app.routes';


describe( 'Pruebas en rutas principales', () => {

  it( 'debería existir la ruta /medico/:id', () => {

    // Copiamos y pegamos el path de app.routes.ts

    expect(RUTAS).toContain({path: 'medico/:id', component: MedicoComponent});

  } );

} );
