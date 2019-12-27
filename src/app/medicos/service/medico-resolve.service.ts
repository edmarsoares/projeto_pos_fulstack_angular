import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Medico } from '../model/medico';
import { Observable } from 'rxjs';
import { MedicosService } from './medicos.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoResolveService implements Resolve<Medico> {

  constructor(private medicoService: MedicosService) { }
  
  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Medico | Observable<Medico> {
      
      if (!route.queryParams) {
          return new Medico();
      }

      return this.medicoService.consultar(route.queryParams.id);
  }

}
