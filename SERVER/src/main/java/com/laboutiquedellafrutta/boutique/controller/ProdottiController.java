package com.laboutiquedellafrutta.boutique.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.model.UtenteAutenticato;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;
import com.laboutiquedellafrutta.boutique.utils.Costanti;

@CrossOrigin("*")
@RestController
public class ProdottiController {
	
	@Autowired
	private IUtenteService uteService;

	@RequestMapping(value = {"prodotti/getListaProdotto"})
	@ResponseBody
	List<Prodotto> getListaProdotti(){
		Prodotto p = null;
		List<Prodotto> list = null;
		try {
			list = new ArrayList<>();
			p = new Prodotto();
			p.setId(1L);
			p.setNome("Arancia");
			p.setDescrizione("Descrizione del prodotto");
			list.add(p);
			p = new Prodotto();
			p.setId(2L);
			p.setNome("Mandarino");
			p.setDescrizione("Descrizione del prodotto");
			list.add(p);
			p = new Prodotto();
			p.setId(3L);
			p.setNome("Mela");
			p.setDescrizione("Descrizione del prodotto");
			list.add(p);
			p = new Prodotto();
			p.setId(4L);
			p.setNome("Pera");
			p.setDescrizione("Descrizione del prodotto");
			list.add(p);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	@RequestMapping(value = {"prodotti/getCoutCarrello"})
	@ResponseBody
	Integer getCoutCarrello(HttpServletRequest request){
		Integer count = 0;
		List<Prodotto> list = null;
		HttpSession session = null;
		UtenteAutenticato ut = null;
		try {
			session = request.getSession();
			ut = (UtenteAutenticato) session.getAttribute(Costanti.UTENTE_SESSIONE);
			list = new ArrayList<>();
			if(ut != null) {
				
			}
			count = list.size();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return count;
	}
	
	@RequestMapping(value = {"carrello/getCarrello"})
	@ResponseBody
	List<Prodotto> getCarrello(HttpServletRequest request){
		List<Prodotto> list = null;
		HttpSession session = null;
		UtenteAutenticato ut = null;
		try {
			session = request.getSession();
			ut = (UtenteAutenticato) session.getAttribute(Costanti.UTENTE_SESSIONE);
			list = new ArrayList<>();
			if(ut != null) {
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	@RequestMapping(value = {"prodotti/aggiungiAlCarrello"})
	@ResponseBody
	String aggiungiAlCarrello(HttpServletRequest request, @RequestBody Prodotto form){
		HttpSession session = null;
		UtenteAutenticato ut = null;
		try {
			session = request.getSession();
			ut = (UtenteAutenticato) session.getAttribute(Costanti.UTENTE_SESSIONE);
			if(ut == null) {
				String newUtente = "Utente";
				Integer random_int = (int)Math.floor(Math.random());
				newUtente += random_int.toString();
				ut = new UtenteAutenticato();
				ut.setNome(newUtente);
				ut.setCognome("");
				ut.setEmail("");
				session.setAttribute(Costanti.UTENTE_SESSIONE, ut);
				uteService.insertUtente(ut);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return "OK";
	}
}
