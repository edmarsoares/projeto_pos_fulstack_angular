import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from './usuario';

export class Pessoa {
   

    id: number;
    nome: string;
    telefone: string;
    cpf: string;
    usuario: Usuario

    constructor(){
        this.usuario = new Usuario();
    }


    static getControl(): FormGroup {
        return new FormGroup({
            id : new FormControl(),
            nome: new FormControl('', [Validators.required]),
            telefone: new FormControl('', [Validators.required]),
            cpf: new FormControl('', [Validators.required, Validators.maxLength(14)]),
            usuario: Usuario.getControl()
        })
    }

    static getInicializeControl(pessoa: Pessoa): FormGroup {
        return new FormGroup({
            id : new FormControl(pessoa.id),
            nome: new FormControl(pessoa.nome, [Validators.required]),
            telefone: new FormControl(pessoa.telefone),
            cpf: new FormControl(pessoa.cpf, [Validators.required, Validators.maxLength(14)]),
            usuario: Usuario.getInicializeControls(pessoa.usuario),
        })
    }

}