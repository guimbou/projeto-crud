import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PESSOAS } from '../mock-pessoas';
import { GerenciaPessoas } from '../gerenciaPessoas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() pessoa: Pessoa = {};

  constructor(private gerenciaPessoas: GerenciaPessoas) { }

  editar():void {
    this.gerenciaPessoas.pessoaSelecionada = this.pessoa;
  }

  remover():void{
    this.gerenciaPessoas.remover(this.pessoa);
  }
}
