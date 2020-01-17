import { Injectable } from '@angular/core';
import { BaseApi } from 'src/app/shared/baseApi';
import { Paciente } from '../../paciente/model/paciente'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApi<Paciente>{

  constructor(protected http: HttpClient) {
    super(http, "pacientes")
  }

  consultarCep(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(map(value => value as any));
  }
}
