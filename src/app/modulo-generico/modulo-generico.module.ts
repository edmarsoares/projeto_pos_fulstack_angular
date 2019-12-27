import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraCpfDirective } from '../mascara/mascara-cpf.directive';



@NgModule({
  declarations: [MascaraCpfDirective],
  imports: [
    CommonModule
  ],
  exports: [MascaraCpfDirective]
})
export class ModuloGenericoModule { }
