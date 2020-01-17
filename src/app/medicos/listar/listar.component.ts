import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicosService } from '../service/medicos.service';
import { Medico } from '../model/medico';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import Swal from 'sweetalert2';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  //angular material
  displayedColumns: string[] = ['id', 'email', 'nome', 'crm','deletar','editar'];
  columns = ['id', 'email', 'nome', 'crm'];
  dataSource: MatTableDataSource<Medico>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  subscription: Subscription;

  medicos: Medico[];

  constructor(protected medicoService: MedicosService, private router: Router) { }

  ngOnInit() {

    // this.subscription = this.router.events.subscribe(event => {
    //   if(event instanceof NavigationEnd){
    //     this.listar();
    //   }
    // })
    this.listar();
  }

  listar(){
    this.medicoService.listar().subscribe(medico => {
      this.medicos = medico;
      this.dataSource = new MatTableDataSource(this.medicos);
    })
  }

  remover(id: number){
    this.medicoService.deleteById(id).subscribe(() => {
      this.showMessageSuccess();
    }),(error)=>{
      Swal.fire(
        'Atenção',
        'Houve um problema ao tentar remover o médico, verifique se existe rede disponível',
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
      text: 'Médico removido com sucesso',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    }).then((result) => {
      this.listar();
    })
  }

}
