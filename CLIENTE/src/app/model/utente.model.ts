import { CredenzialiLogin } from "./credenziali-login";
import { IndirizzoUtente } from "./indirizzo-utente";

export class Utente {
    nome?: string;
    cognome?: string;
    codFiscale?: string;
    listaIndirizzi?: [IndirizzoUtente];
    email?: string;
    credenziali: CredenzialiLogin;
}
