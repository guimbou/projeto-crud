import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../pessoa';
import { GerenciaPessoas } from '../gerenciaPessoas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() pessoaSelecionada = new EventEmitter<Pessoa>();
  @Input() pessoa: Pessoa = {};

  constructor(private gerenciaPessoas: GerenciaPessoas) { }

  editar():void {
    //this.gerenciaPessoas.pessoaSelecionada = this.pessoa;
    this.pessoaSelecionada.emit(this.pessoa);
  }

  remover():void{
    this.gerenciaPessoas.remover(this.pessoa);
  }
}
