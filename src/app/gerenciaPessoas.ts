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
    console.log(`Adicionando ${pessoa}`);
      this.httpClient.post("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json", pessoa).subscribe();
  }

  remover(id: string): void{
    this.httpClient.delete<unknown>(`https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas/${id}.json`).subscribe({
      next: data => {
          console.log('Delete successful');
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });
  }

	atualizaLista(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json");
	}

  update(pessoa: any): void {
    this.httpClient.put<Pessoa>(`https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas/${pessoa.key}.json`,pessoa.value).subscribe(p => console.log(p));
  }


  /* getPessoas(): Pessoa[]{
    this.atualizaPessoas();
    return this.pessoas;
  } */

  /* atualizaPessoas(): Observable<Pessoa[]> {
		this.httpClient.get<JSON>("https://projeto-crud-data-default-rtdb.firebaseio.com/pessoas.json").subscribe({
      next: (p) => {
        this.pessoas = Object.values(p).map(value => {
          return new Pessoa(value.nome, value.cpf);
        });
      },
      error: err => console.log('Error',err)
    });

    return obsof1;
	} */
}


