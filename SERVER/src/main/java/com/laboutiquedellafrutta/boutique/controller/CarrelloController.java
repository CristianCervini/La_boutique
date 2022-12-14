package com.laboutiquedellafrutta.boutique.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.laboutiquedellafrutta.boutique.constants.Paths;
import com.laboutiquedellafrutta.boutique.model.Prodotto;

public interface CarrelloController {
	
	@PostMapping(value= {Paths.GET_CARRELLO})
	List<Prodotto> getCarrello(HttpServletRequest request);
	
	@RequestMapping(value = {Paths.GET_COUNT_CARRELLO})
	Integer getCoutCarrello(HttpServletRequest request);
	
	@RequestMapping(value = {Paths.ADD_CARRELLO})
	String aggiungiAlCarrello(HttpServletRequest request, Prodotto form);
	
}
