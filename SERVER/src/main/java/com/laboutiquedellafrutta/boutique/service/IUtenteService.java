package com.laboutiquedellafrutta.boutique.service;

import org.springframework.stereotype.Service;

import com.laboutiquedellafrutta.boutique.model.Utente;

@Service
public interface IUtenteService {
	public void insertUtente(Utente ute) throws Exception;
	public void registraUtente(Utente ute) throws Exception;
}
