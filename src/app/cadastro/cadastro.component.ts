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
  pessoaSelecionada?: Pessoa;

  constructor(private gerenciaPessoa: GerenciaPessoas) {
  }

  preencheCampos(evento:Pessoa){
    this.pessoaSelecionada = evento;
    this.inNome = evento.nome!;
    this.inCpf = String(evento.cpf);
  }

  cadastrar(): void {
    if(this.pessoaSelecionada){
      this.pessoaSelecionada.nome = this.inNome;
      this.pessoaSelecionada.cpf = Number(this.inCpf);
      this.cancelar();
    } else {
      let pessoa = new Pessoa(this.inNome, Number(this.inCpf));
      this.gerenciaPessoa.adicionar(pessoa);
      this.cancelar();
    }
  }

  cancelar(): void{
    this.pessoaSelecionada = undefined;
    this.inNome = '';
    this.inCpf = '';
  }
}
