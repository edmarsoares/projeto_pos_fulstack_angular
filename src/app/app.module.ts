import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicosModule } from './medicos/medicos.module';
import { MatFormField, MatSidenavModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatDatepickerModule, MatDialogActions, MatDialogModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabelaGenericaComponent } from './tabela-generica/tabela-generica.component';
import { OnlyNumParPipe } from './pipes/only-num-par.pipe';
import { TestComponent } from './test/test.component';
import { UsuarioModule } from './usuario/usuario.module';
import { CheckPasswordDirective } from './validators/check-password.directive';
import { PacienteModule } from './paciente/paciente.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OnlyNumParPipe,
    TestComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MedicosModule,
    UsuarioModule,
    PacienteModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
