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

  constructor(private gerenciaPessoa: GerenciaPessoas, private sharedService:SharedService) {
  }

  preencheCampos(evento:any){
    this.pessoaSelecionada = evento;
    this.inNome = this.pessoaSelecionada?.value!.nome!;
    this.inCpf = String(this.pessoaSelecionada?.value!.cpf);
  }

  cadastrar(): void {
    if(this.pessoaSelecionada){ //alterar
      this.pessoaSelecionada.value!.nome = this.inNome;
      this.pessoaSelecionada.value!.cpf = Number(this.inCpf);
      this.gerenciaPessoa.update(this.pessoaSelecionada);
      this.cancelar();
    } else { //adicionar
      let pessoa = new Pessoa(this.inNome, Number(this.inCpf));
      this.gerenciaPessoa.adicionar(pessoa);
      this.cancelar();
      this.sharedService.sendClickEvent();
    }
  }

  cancelar(): void{
    this.pessoaSelecionada = undefined;
    this.inNome = '';
    this.inCpf = '';
  }
}
