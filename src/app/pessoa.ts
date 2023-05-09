export class Pessoa {
    key?: string;
	value: {
		nome: string;
    	cpf: number;
	} = {nome: '', cpf: 0};

    constructor(nome: string, cpf:number){
        this.value.nome = nome;
        this.value.cpf = cpf;
    }

}
