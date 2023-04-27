import { Injectable } from "@angular/core";
import { Pessoa } from "./pessoa";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class GerenciaPessoas {

  pessoaSelecionada?: Pessoa;

  constructor(private httpClient: HttpClient) {}

  adicionar(pessoa: Pessoa): void{
      this.httpClient.post("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json", pessoa).subscribe();
			this.getPessoas().subscribe((resposta) => console.log(resposta));
  }

  remover(pessoa: Pessoa): void{}

	getPessoas(): Observable<Pessoa[]>{
		return this.httpClient.get<Pessoa[]>("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json");
	}
}
