import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicosService() {

    return this.http.get('...').pipe(map( resp => resp['medicos'] )); // No podemos poner resp.medicos porque no tenemos el tipado

  }

  agregarMedicoService( medico: any ) {

    return this.http.post('...', medico ).pipe(map( resp => resp['medicos'] ));

  }

  borrarMedicoService( id: string ) {

    return this.http.delete('...' ).pipe(map( resp => resp['medicos'] ));

  }

}
