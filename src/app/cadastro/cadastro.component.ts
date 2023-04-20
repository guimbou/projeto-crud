import { Component } from '@angular/core';
import { PESSOAS } from '../mock-pessoas';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  inNome: string = '';
  inCpf: string = '';

  cadastrar(nome: string, cpf: string): void{
    //alert("Cadastrar");
    let pessoa = new Pessoa(this.inNome, Number(this.inCpf));
    PESSOAS.push(pessoa);
    this.inNome = '';
    this.inCpf = '';
  }

  cancelar(): void{
    //alert("Cancelar");
    this.inNome = '';
    this.inCpf = '';
    //limpar a variavel isSelect;
  }
}
