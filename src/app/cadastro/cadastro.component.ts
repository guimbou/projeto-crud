import { Component, Input } from '@angular/core';
import { Pessoa } from '../pessoa';
import { GerenciaPessoas } from '../gerenciaPessoas';
import { SharedService } from '../sharedService';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {

  inNome: string = '';
  inCpf: string = '';
  pessoaSelecionada?: Pessoa;
  objPessoa?: any;

  constructor(private gerenciaPessoa: GerenciaPessoas, private sharedService:SharedService) {
  }

  preencheCampos(evento:any){
    this.pessoaSelecionada = evento.value;
    this.objPessoa = evento;
    this.inNome = evento.value.nome!;
    this.inCpf = String(evento.value.cpf);
  }

  cadastrar(): void {
    //se alterar, se não adicionar
    if(this.pessoaSelecionada){
      this.objPessoa.value.nome = this.inNome;
      this.objPessoa.value.cpf = Number(this.inCpf);
      this.gerenciaPessoa.update(this.objPessoa);
      this.cancelar();
    } else {
      let pessoa = new Pessoa(this.inNome, Number(this.inCpf));
      this.gerenciaPessoa.adicionar(pessoa);
      this.cancelar();
      this.sharedService.sendClickEvent();
    }
  }

  cancelar(): void{
    this.pessoaSelecionada = undefined;
    this.objPessoa = undefined;
    this.inNome = '';
    this.inCpf = '';
  }
}
