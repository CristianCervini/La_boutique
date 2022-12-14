package com.laboutiquedellafrutta.boutique.controller;

import org.springframework.web.bind.annotation.RequestMapping;

import com.laboutiquedellafrutta.boutique.constants.Paths;
import com.laboutiquedellafrutta.boutique.model.ResponseString;
import com.laboutiquedellafrutta.boutique.model.Utente;

public interface SignupController {
	
	@RequestMapping(value = {Paths.REGISTRA_UTENTE})
    ResponseString registraUtente(Utente ute);

}
