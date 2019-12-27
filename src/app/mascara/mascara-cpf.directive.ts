import { Directive, AfterContentChecked } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BasicMask } from '../mascara/basic-mask'

@Directive({
  selector: '[appMascaraCpf]'
})
export class MascaraCpfDirective extends BasicMask {

  constructor( ngControl: NgControl) {
    super(ngControl)
   }

  aplicarMascara(valor: string): string {
    
    const stringOnlyNumber = valor.replace(/[^0-9.,-]/g, '');

    const valorPrimeiraFormatacao = stringOnlyNumber.replace(/(\d{3})(\d)/, '$1.$2');

    // Coloca um ponto entre o terceiro e o quarto dígitos
    // de novo (para o segundo bloco de números)
    const valorSegundaFormatacao = valorPrimeiraFormatacao.replace(/(\d{3})(\d)/, '$1.$2');

    // Coloca um hífen entre o terceiro e o quarto dígitos
    const valorTerceiraFormatacao = valorSegundaFormatacao.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    return valorTerceiraFormatacao;
  }


}
