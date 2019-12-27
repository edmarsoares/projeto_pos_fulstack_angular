import { Component, OnInit, Input } from '@angular/core';
import { ServicoSimples } from '../model/servicoSimples';
import { Tabela } from '../tabela-generica/model/tabela'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tabela-generica',
  templateUrl: './tabela-generica.component.html',
  styleUrls: ['./tabela-generica.component.css']
})
export class TabelaGenericaComponent implements OnInit {

  @Input() headerColumns: string[];
  @Input() attributesNames: string[];
  @Input() servicoSimples: ServicoSimples<any>;
  @Input() dataSource: MatTableDataSource<any>;


  tabelas: Tabela[] = [];

  constructor() { }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.servicoSimples.listar().subscribe(data => {

      this.tabelas = this.montarTabelas(data,this.attributesNames);
      console.log("Gerando minha tabela", this.tabelas);
      this.dataSource = new MatTableDataSource(this.tabelas);
    });

  }

  montarTabelas(data: any[], columnNames: string[]) {
    if (!data || columnNames.length == 0) {
      return [];
    }

    let tabela:Tabela[] = data.map(dado => {
      return this.montar(dado, columnNames);
    })

    return tabela;
  }

  montar(data: any, columnNames: string[]): Tabela{
    if (!data || columnNames.length == 0) {
      return new Tabela();
    }
    debugger;
    const tabela: Tabela = new Tabela();
    tabela.id = data.id;
    tabela.nameAtributtesColumns = columnNames.map(nomeAtributo => {
      return data[nomeAtributo];
    }) 

    return tabela;
   
  }

}
