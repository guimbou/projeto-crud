import { Injectable } from "@angular/core";
import { Pessoa } from "./pessoa";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GerenciaPessoas {

    pessoaSelecionada?: Pessoa;
    pessoas: Pessoa[] = [];

    constructor() { }

    adicionar(pessoa: Pessoa): void{
        //console.log(this.pessoas);
        this.pessoas.push(pessoa);
        console.log(this.pessoas);
    }

    remover(pessoa: Pessoa): void{
        for( var i = 0; i < this.pessoas.length; i++){ 
            if ( this.pessoas[i] === pessoa) { 
                this.pessoas.splice(i, 1);
            }
        }
    }

    helloClass(): void{
        alert("Hello Class");
    }
}