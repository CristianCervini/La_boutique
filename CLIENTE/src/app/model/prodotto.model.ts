import { Component, Input } from "@angular/core";

@Component({
    template: ''
})
export class Prodotto {

    constructor(){}

    private id : number;
    private nome : string;
    private descrizione : string;
    private img : string;

    get getId() : number{
        return this.id;
    }

    @Input()
    set setId(value : number){
        this.id = value;
    }

    get getNome() : string{
        console.log("this.nome", this.nome);
        return this.nome;
    }

    @Input()
    set setNome(value : string){
        this.nome = value;
    }

    get getDescrizione() : string{
        return this.descrizione;
    }

    @Input()
    set setDescrizione(value : string){
        this.descrizione = value;
    }

    get getImg() : string{
        return this.img;
    }

    @Input()
    set setImg(value : string){
        this.img = value;
    }
}
