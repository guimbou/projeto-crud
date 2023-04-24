import { Component, EventEmitter, Output } from '@angular/core';
import { PESSOAS } from '../mock-pessoas';
import { Pessoa } from '../pessoa';
import { GerenciaPessoas } from '../gerenciaPessoas';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {

  constructor(private gerenciaPessoas: GerenciaPessoas) { }

  @Output() pessoaSelecionada = new EventEmitter<Pessoa>();

  selecionar(evento:Pessoa){
    this.pessoaSelecionada.emit(evento);
  }

  pessoas: Pessoa[] = this.gerenciaPessoas.pessoas;
}
