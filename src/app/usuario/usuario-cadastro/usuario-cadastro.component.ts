import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../usuario/model/UsuarioModel'
import { UsuarioService } from '../service/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  isEdicao: boolean;

  usuario: UsuarioModel

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  salvar() {
    const operacao = this.isEdicao ? 'atualizar' : 'salvar';

    this.usuarioService[operacao](this.usuario).subscribe(() => {
      this.showMessageSuccess();
    }, (err) => {
      Swal.fire(
        'Atenção',
        'Houve um problema ao tentar cadastrar o usuário, verifique se existe rede disponível',
        'warning'
      )

    })

  }

  showMessageSuccess() {
    const operacao = this.isEdicao ? 'Atualizar' : 'Cadastro'
    const text = this.isEdicao ? 'atualizado' : 'cadastrado'
    Swal.fire({
      title: `${operacao}  médicos`,
      text: `Usuário ${text} com sucesso`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    }).then((result) => {
      this.router.navigate(['/usuario'])
    })
  }

}
