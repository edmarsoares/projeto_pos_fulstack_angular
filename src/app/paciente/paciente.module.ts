import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { MedicosRoutingModule } from '../medicos/medicos-routing-module';
import { MatToolbarModule, MatTableModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from '../paciente/service/paciente.service';
import { PacienteCadastroComponent } from './paciente-cadastro/paciente-cadastro.component'
import { MascaraCpfDirective } from '../mascara/mascara-cpf.directive';
import { ModuloGenericoModule } from '../modulo-generico/modulo-generico.module';
import { PacienteListagemComponent } from './paciente-listagem/paciente-listagem.component';


@NgModule({
  declarations: [PacienteCadastroComponent, PacienteListagemComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    MedicosRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    ModuloGenericoModule
    
  ],
  providers: [PacienteService],
  exports: []
})
export class PacienteModule { }
