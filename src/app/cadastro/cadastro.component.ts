import { Component, Input } from '@angular/core';
import { PESSOAS } from '../mock-pessoas';
import { Pessoa } from '../pessoa';
import { GerenciaPessoas } from '../gerenciaPessoas';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  
  inNome: string = '';
  inCpf: string = '';

  constructor(private gerenciaPessoa: GerenciaPessoas) { 
  }

  cadastrar(nome: string, cpf: string): void{
    let pessoa = new Pessoa(this.inNome, Number(this.inCpf));
    this.gerenciaPessoa.adicionar(pessoa);
    this.inNome = '';
    this.inCpf = '';
  }

  cancelar(): void{
    this.inNome = '';
    this.inCpf = '';
    //limpar a variavel isSelect;
  }
}
