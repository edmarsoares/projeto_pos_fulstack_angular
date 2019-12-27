import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyNumPar'
})
export class OnlyNumParPipe implements PipeTransform {

  transform(numeros: number[], ...args: any[]): number[] {

    console.log(numeros);
    const pares = numeros.filter(numero => numero % 2 == 0);
    
    return pares;
  }

}
