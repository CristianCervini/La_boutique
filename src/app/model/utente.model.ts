import { Component, Input } from "@angular/core";

@Component({
    template: ''
})

export class Utente {
    constructor(){}

    private username : String;
    private password : String;

    get getUsername() : String{
        return this.username;
    }

    @Input()
    set setUsername(value : String){
        this.username = value;
    }

    get getPassword() : String{
        return this.password;
    }

    @Input()
    set setPassword(value : String){
        this.password = value;
    }

    // getUsername(){
    //     return this.username;
    // }

    // setUsername(user){
    //     this.username = user;
    // }

    // getPassword(){
    //     return this.password;
    // }

    // setPassword(pass){
    //     this.password = pass;
    // }
}
