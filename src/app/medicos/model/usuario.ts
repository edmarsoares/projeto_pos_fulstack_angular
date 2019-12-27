import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Usuario{

    id: number;
    login: string;
    senha: string;


    static getControl(): FormGroup{
        return new FormGroup({
            id: new FormControl(),
            login: new FormControl('', [Validators.required]),
            senha: new FormControl('',[Validators.required])
        })
    }

    static getInicializeControls(usuario: Usuario): FormGroup {
        return new FormGroup({
            id: new FormControl(usuario.id),
            login: new FormControl(usuario.login, [Validators.required]),
            senha: new FormControl(usuario.senha, [Validators.required])
        })
    }
    
}