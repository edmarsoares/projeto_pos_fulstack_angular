import { Directive } from '@angular/core';
import { BasicMask } from './basic-mask';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMascaraTelefone]'
})
export class MascaraTelefoneDirective extends BasicMask {

  constructor(ngControl: NgControl) {
    super(ngControl)
  }

  aplicarMascara(valor: string): string {

    const primeiraFormatacao= valor.replace(/\D/g, "")  //Remove tudo o que não é dígito
    const segundaFormatacao = primeiraFormatacao.replace(/^(\d\d)(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    const terceiraFormatacao = segundaFormatacao.replace(/(\d{4})(\d)/, "$1-$2")

    return terceiraFormatacao;
  }

}
