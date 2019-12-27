import { Component, OnInit } from '@angular/core';
import { Medico } from '../model/medico';
import { MedicosService } from '../service/medicos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'
import { title } from 'process';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  // formGroup: FormGroup;

  medico: Medico;

  isEdicao: boolean = false ;


  // constructor( private location: Location , private medicoService: MedicosService, activateRouter: ActivatedRoute) {
  //   this.medico = activateRouter.snapshot.data.medico;
  // }
  public formGroup: FormGroup;

  constructor(
    private location: Location,
    private medicoService: MedicosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {

    this.medico = this.activatedRoute.snapshot.data.medico;

    if (this.medico != undefined) {

      this.isEdicao = true;
      this.formGroup = Medico.getInicializeControl(this.medico);

    }else{
      this.formGroup = Medico.getControl();
    }

  }

  public hasError = (controlName: string, errorName: string, formGroupName?: string[]) => {

    if (formGroupName && formGroupName.includes('pessoa') && formGroupName.includes('usuario')) {
      return this.formGroup.get('pessoa').get('usuario').get(controlName).hasError(errorName);
    }

    if (formGroupName && formGroupName.includes('pessoa') && !formGroupName.includes('usuario')) {
      return this.formGroup.get('pessoa').get(controlName).hasError(errorName);
    }
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  salvar(formGroupValue) {
    const operacao = this.isEdicao ? 'atualizar' : 'salvar';

    this.medicoService[operacao](formGroupValue).subscribe(() => {
      this.showMessageSuccess();
    }, (err) => {
      Swal.fire(
        'Atenção',
        'Houve um problema ao tentar cadastrar o médico, verifique se existe rede disponível',
        'warning'
      )

    })

  }

  showMessageSuccess() {
    const operacao = this.isEdicao ? 'Atualizar' : 'Cadastro'
    const text = this.isEdicao ? 'atualizado' : 'cadastrado'
    Swal.fire({
      title: `${operacao}  médicos`,
      text: `Médico ${text} com sucesso`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    }).then((result) => {
      this.router.navigate(['/medico'])
    })
  }


}
