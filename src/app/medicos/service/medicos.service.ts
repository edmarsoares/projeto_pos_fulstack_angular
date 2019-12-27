import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../model/medico';
import { BaseApi } from '../../shared/baseApi';
import { ServicoSimples } from '../../model/servicoSimples';
@Injectable({
  providedIn: 'root'
})
export class MedicosService extends BaseApi<Medico> implements ServicoSimples<Medico> {
  
  constructor(http: HttpClient) { 
    super(http, "medicos")
  }

 
}
