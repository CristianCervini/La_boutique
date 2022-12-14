package com.laboutiquedellafrutta.boutique.controller_impl;

import com.laboutiquedellafrutta.boutique.constants.Paths;
import com.laboutiquedellafrutta.boutique.controller.SignupController;
import com.laboutiquedellafrutta.boutique.model.ResponseString;
import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping(value = Paths.SIGNUP)
@RestController
public class SignupControllerImpl implements SignupController {

    @Autowired
    private IUtenteService uteService;

    @Override
    public ResponseString registraUtente(@RequestBody Utente ute){
        ResponseString result = null;
        try{
            uteService.registraUtente(ute);
            result = new ResponseString("OK");
        } catch (Exception e){
            e.printStackTrace();
            result = new ResponseString();
            result.setResponse("Errore durante la registrazione dell'utente");
            if(e.getMessage().contains("Errore - ")){
                result.setResponse(e.getMessage());
            }

        }
        return result;
    }

}
