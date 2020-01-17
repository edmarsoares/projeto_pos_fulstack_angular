import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BasicMask } from './basic-mask';

@Directive({
  selector: '[appMascaraCep]'
})
export class MascaraCepDirective extends BasicMask {

  constructor( ngControl: NgControl) {
    super(ngControl)
   }

  aplicarMascara(valor: string): string {
    
    const stringOnlyNumber = valor.replace(/[^0-9.,-]/g, '');

    const stringFormatada = stringOnlyNumber.replace(/^(\d{5})(\d)/,"$1-$2");
      
    return stringFormatada;
  }


}
