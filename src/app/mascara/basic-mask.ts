
import { AfterContentChecked, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

export abstract class BasicMask implements AfterContentChecked {
   
    constructor(protected ngControl: NgControl) { }

    ngAfterContentChecked() {
        if (this.aplicarMascara && this.ngControl && this.ngControl.value) {
            this.atualizarFormControl(this.ngControl.value);
            this.ngControl.control.updateValueAndValidity();
        }
    }

    atualizarFormControl(inputValue: string) {
        // garantindo que o input eh uma string
        const inputValueString = String(inputValue);

        // Limitando o numero de caracteres
        const valorFormatado = this.aplicarMascara(inputValueString);

        this.ngControl.reset();
        this.ngControl.control.patchValue(valorFormatado);
    }

    abstract aplicarMascara(value: string);

    
}