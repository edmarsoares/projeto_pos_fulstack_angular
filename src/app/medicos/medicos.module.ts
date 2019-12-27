import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatRow, MatHeaderRow, MatIconModule, MatFormField, MatFormFieldModule, MatMenuModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';


import { ListarComponent } from './listar/listar.component';
import { MedicosRoutingModule } from './medicos-routing-module';
import { MedicosService } from './service/medicos.service';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicoResolveService } from './service/medico-resolve.service';
import { TabelaGenericaComponent } from '../tabela-generica/tabela-generica.component';
import { MascaraCpfDirective } from '../mascara/mascara-cpf.directive';


@NgModule({
  declarations: [ListarComponent, EditarComponent,TabelaGenericaComponent, MascaraCpfDirective], 
  imports: [
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
  exports: [
    MedicosRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatFormFieldModule,
    FormsModule, 
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    TabelaGenericaComponent
  ],
  providers: [MedicosService,MedicoResolveService]
})
export class MedicosModule { }
