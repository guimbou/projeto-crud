import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() nome?: string;
  @Input() cpf?: number;

  editar():void {
    alert("Editar");
  }

  deletar():void{
    alert("Deletar");
  }
}
