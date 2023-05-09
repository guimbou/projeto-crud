import { Injectable } from "@angular/core";
import { Pessoa } from "./pessoa";
import { Observable, map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GerenciaPessoas {

  constructor(private httpClient: HttpClient) {
    this.atualizaLista();
  }

  adicionar(pessoa: Pessoa): void {
    this.httpClient.post("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json", pessoa.value).subscribe();
  }

  remover(id: string): void{
    this.httpClient.delete<unknown>(`https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas/${id}.json`).subscribe();
  }

	atualizaLista(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json");
	}

  update(pessoa: any): void {
    this.httpClient.put<Pessoa>(`https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas/${pessoa.key}.json`,pessoa.value).subscribe();
  }
}


