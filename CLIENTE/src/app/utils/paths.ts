export class Paths{
    static API = "/api";

    static PRODOTTI = Paths.API + "/prodotti";
    static CARRELLO = Paths.API + "/carrello";
    static SIGNUP = Paths.API + "/signup";

    static GET_COUNT_CARRELLO = Paths.CARRELLO + "/get-count-carrello";
    static ADD_CARRELLO = Paths.CARRELLO + "/add-carrello";

    static GET_LISTA_PRODOTTO = Paths.PRODOTTI + "/get-lista-prodotti";
    static REGISTRA_PRODOTTO = Paths.PRODOTTI + "/registra-prodotto";
    static DELETE_PRODOTTO = Paths.PRODOTTI + "/cancella-prodotto";
    static MODIFICA_PRODOTTO = Paths.PRODOTTI + "/modifica-prodotto";

    static REGISTRA_UTENTE = Paths.SIGNUP + "/registra-utente";
}