package com.laboutiquedellafrutta.boutique.service;

import org.springframework.stereotype.Service;

import com.laboutiquedellafrutta.boutique.model.UtenteAutenticato;

@Service
public interface IUtenteService {
	public void insertUtente(UtenteAutenticato ute) throws Exception;
}
