import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public http: HttpClient) { }

  getMedicosService(){

    return this.http.get('...');
  }

}
