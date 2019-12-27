import { Pessoa } from './pessoa';
import { FormGroup, Validators, FormControl } from '@angular/forms';


export class Medico {
    id: number;
    crm: string;
    pessoa: Pessoa;

    constructor() {
        this.pessoa = new Pessoa();
    }

    static getControl() : FormGroup {
        return new FormGroup({
            id: new FormControl(),
            crm: new FormControl('', [Validators.required]),
            pessoa: Pessoa.getControl(),
        });
    }

    static getInicializeControl(medico: Medico) {
        return new FormGroup({
            id: new FormControl(medico.id),
            crm: new FormControl(medico.crm, [Validators.required]),
            pessoa: Pessoa.getInicializeControl(medico.pessoa)
        })
    }


}