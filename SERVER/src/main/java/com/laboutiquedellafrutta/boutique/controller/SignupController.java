package com.laboutiquedellafrutta.boutique.controller;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.model.ResponseString;
import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;
import com.laboutiquedellafrutta.boutique.utils.Costanti;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = Costanti.CROSS_ORIGIN)
@RequestMapping(value = "signup/")
@RestController
public class SignupController {

    @Autowired
    private IUtenteService uteService;

    @RequestMapping(value = {"registraUtente"})
    ResponseString registraUtente(@RequestBody Utente ute){
        ResponseString result = null;
        try{
            uteService.registraUtente(ute);
            result = new ResponseString("OK");
        } catch (Exception e){
            e.printStackTrace();
            result = new ResponseString("Errore durante la registrazione dell'utente");
        }
        return result;
    }

}
