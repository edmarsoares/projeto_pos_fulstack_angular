import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { MedicoResolveService } from './service/medico-resolve.service';

const routes: Routes = [
  { path: "medico", component: ListarComponent },
  { path: "medico/cadastro", component: EditarComponent },
  {
    path: "medico/edit",
    component: EditarComponent,
    resolve: {
      medico: MedicoResolveService
    }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }