import { Component } from '@angular/core';
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

  pessoas: Pessoa[] = this.gerenciaPessoas.pessoas;
}
