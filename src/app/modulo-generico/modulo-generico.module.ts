import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraCpfDirective } from '../mascara/mascara-cpf.directive';
import { MascaraCepDirective } from '../mascara/mascara-cep.directive';
import { MascaraTelefoneDirective } from '../mascara/mascara-telefone.directive';





@NgModule({
  declarations: [MascaraCpfDirective, MascaraCepDirective, MascaraTelefoneDirective],
  imports: [
    CommonModule
  ],
  exports: [MascaraCpfDirective , MascaraCepDirective, MascaraTelefoneDirective]
})
export class ModuloGenericoModule { }
