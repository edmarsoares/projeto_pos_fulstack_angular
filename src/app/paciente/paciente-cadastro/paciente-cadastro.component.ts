import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { FormGroup } from '@angular/forms';
import { PacienteService } from '../service/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit {

  paciente: Paciente;

  isEdicao: boolean = false;

  public formGroup: FormGroup;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.paciente = this.activatedRoute.snapshot.data.paciente;

    if (this.paciente != undefined) {

      this.isEdicao = true;
      //  this.formGroup = Paciente.getInicializeControl(this.paciente);

    } else {
      this.formGroup = Paciente.getControl();
    }

  }



  public hasError = (controlName: string, errorName: string, formGroupName?: string[]) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {

  }

  salvar(formGroupValue) {
    const operacao = this.isEdicao ? 'atualizar' : 'salvar';

    this.pacienteService[operacao](formGroupValue).subscribe(() => {
      this.showMessageSuccess();
    }, (err) => {
      Swal.fire(
        'Atenção',
        'Houve um problema ao tentar cadastrar o paciente, verifique se existe rede disponível',
        'warning'
      )

    })

  }

  showMessageSuccess() {
    const operacao = this.isEdicao ? 'Atualizar' : 'Cadastro'
    const text = this.isEdicao ? 'atualizado' : 'cadastrado'
    Swal.fire({
      title: `${operacao}  pacientes`,
      text: `Paciente ${text} com sucesso`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    }).then((result) => {
      this.router.navigate(['/paciente'])
    })
  }


}
