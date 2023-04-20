import { Component } from '@angular/core';
import { PESSOAS } from '../mock-pessoas';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  pessoas: Pessoa[] = PESSOAS;
}
