import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  editar():void {
    alert("Editar");
  }

  deletar():void{
    alert("Deletar");
  }
}
