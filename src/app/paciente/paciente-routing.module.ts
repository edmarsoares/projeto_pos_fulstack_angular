import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component';
import { PacienteListagemComponent } from './paciente-listagem/paciente-listagem.component';


const routes: Routes = [
  {path: "paciente" , component: PacienteListagemComponent},
  {path: "paciente/cadastro" , component: PacienteCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { } 
