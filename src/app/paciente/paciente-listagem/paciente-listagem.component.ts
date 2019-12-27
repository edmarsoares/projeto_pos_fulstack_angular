import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService} from '../service/paciente.service';
import { Subscription } from 'rxjs';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-listagem',
  templateUrl: './paciente-listagem.component.html',
  styleUrls: ['./paciente-listagem.component.css']
})
export class PacienteListagemComponent implements OnInit {

  //angular material
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email','deletar','editar'];
  columns = ['id', 'nome', 'cpf', 'email'];
  dataSource: MatTableDataSource<Paciente>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  subscription: Subscription;

  pacientes: Paciente[];

  constructor(protected medicoService: PacienteService, private router: Router) { }

  ngOnInit() {

    // this.subscription = this.router.events.subscribe(event => {
    //   if(event instanceof NavigationEnd){
    //     this.listar();
    //   }
    // })
    this.listar();
  }

  listar(){
    this.medicoService.listar().subscribe(paciente => {
      this.pacientes = paciente;
      this.dataSource = new MatTableDataSource(this.pacientes);
    })
  }

  remover(id: number){
    this.medicoService.deleteById(id).subscribe(() => {
      this.showMessageSuccess();
    }),(error)=>{
      Swal.fire(
        'Atenção',
        'Houve um problema ao tentar remover o paciente, verifique se existe rede disponível',
        'warning'
      )
    }
  }

  edit(idEntidade){
    this.router.navigate(['/medico/edit'], {
      queryParams: { id: idEntidade },

    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showMessageSuccess(){
    Swal.fire({
      title: 'Remoção',
      text: 'Paciente removido com sucesso',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    }).then((result) => {
      this.listar();
    })
  }

}
