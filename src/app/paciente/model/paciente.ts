
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Paciente {

    id: string;
    nome: string;
    telefone: string;
    cpf: string;
    cep: string;
    email: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    uf: string;


    static getControl(): FormGroup {

        return new FormGroup({
            id: new FormControl(),
            nome: new FormControl('', [Validators.required]),
            telefone: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required]),
            cep: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            logradouro: new FormControl('', [Validators.required]),
            complemento: new FormControl(),
            bairro: new FormControl('', [Validators.required]),
            uf: new FormControl('', [Validators.required]),
        });
    }
}