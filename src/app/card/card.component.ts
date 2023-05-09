import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GerenciaPessoas } from '../gerenciaPessoas';
import { SharedService } from '../sharedService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() pessoaSelecionada = new EventEmitter<any>();
  @Input() pessoa: any = {};

  constructor(private gerenciaPessoas: GerenciaPessoas, private sharedService:SharedService) { }

  editar():void {
    this.pessoaSelecionada.emit(this.pessoa);
  }

  remover():void{
    this.gerenciaPessoas.remover(this.pessoa.key);
    this.sharedService.sendClickEvent();
  }
}
