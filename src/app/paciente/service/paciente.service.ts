import { Injectable } from '@angular/core';
import { BaseApi } from 'src/app/shared/baseApi';
import { Paciente } from '../../paciente/model/paciente'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends BaseApi<Paciente>{

  constructor(http: HttpClient) {
    super(http, "pacientes")
   }
}
