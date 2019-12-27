import { Injectable } from '@angular/core';
import { BaseApi } from 'src/app/shared/baseApi';
import { UsuarioModel } from '../model/UsuarioModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseApi<UsuarioModel> {

  constructor(http: HttpClient) {
    super(http, "usuarios");
  }
}
