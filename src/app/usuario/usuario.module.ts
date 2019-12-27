import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { MedicosRoutingModule } from '../medicos/medicos-routing-module';
import { MatToolbarModule, MatTableModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckPasswordDirective } from '../validators/check-password.directive';
import { UsuarioService } from '../usuario/service/usuario.service';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component'


@NgModule({
  declarations: [UsuarioCadastroComponent, CheckPasswordDirective, UsuarioListagemComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CommonModule,
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
    MatPaginatorModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
