import { Observable } from 'rxjs';

export interface ServicoSimples<T> {
    listar(): Observable<T[]>;
}