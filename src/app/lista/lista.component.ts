import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Pessoa } from '../pessoa';
import { GerenciaPessoas } from '../gerenciaPessoas';
import { SharedService } from '../sharedService';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  pessoas!: Observable<Pessoa[]>;

  @Output() pessoaSelecionada = new EventEmitter<Pessoa>();

  clickEventsubscription : Subscription;

  constructor(private gerenciaPessoas: GerenciaPessoas,private sharedService:SharedService) {
    this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
      this.att();
    })

    this.pessoas = gerenciaPessoas.atualizaLista();
  }

  ngOnInit(): void {
  }

  selecionar(evento:Pessoa){
    this.pessoaSelecionada.emit(evento);
  }

  att():void{
    setTimeout(() => {
      this.pessoas = this.gerenciaPessoas.atualizaLista();
    }, 900);
  }

}


