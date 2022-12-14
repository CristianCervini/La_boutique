package com.laboutiquedellafrutta.boutique.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.laboutiquedellafrutta.boutique.constants.Paths;
import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.model.ResponseString;

public interface ProdottiController {
	
	@PostMapping(value= {Paths.GET_LISTA_PRODOTTI})
	List<Prodotto> getListaProdotti();
	
	@RequestMapping(value = {Paths.REGISTRA_PRODOTTO})
	ResponseString registraProdotto(Prodotto prodotto);
	
	@RequestMapping(value = {Paths.DELETE_PRODOTTO})
	ResponseString cancellaProdotto(Long idProdotto);
	
	@RequestMapping(value = {Paths.EDIT_PRODOTTO})
	ResponseString modificaProdotto(Prodotto prodotto);
	
}
