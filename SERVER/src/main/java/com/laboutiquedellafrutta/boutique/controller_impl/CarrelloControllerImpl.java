package com.laboutiquedellafrutta.boutique.controller_impl;

import com.laboutiquedellafrutta.boutique.constants.Constants;
import com.laboutiquedellafrutta.boutique.constants.Paths;
import com.laboutiquedellafrutta.boutique.controller.CarrelloController;
import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequestMapping(value = Paths.CARRELLO)
@RestController
public class CarrelloControllerImpl implements CarrelloController {
	
	@Autowired
	private IUtenteService uteService;

	@Override
	public List<Prodotto> getCarrello(HttpServletRequest request) {
		List<Prodotto> list = null;
        HttpSession session = null;
        Utente ut = null;
        try {
            session = request.getSession();
            ut = (Utente) session.getAttribute(Constants.UTENTE_SESSIONE);
            list = new ArrayList<>();
            if(ut != null) {

            }
        }catch(Exception e) {
            e.printStackTrace();
        }
        return list;
	}
	
	@Override
	public Integer getCoutCarrello(HttpServletRequest request){
		Integer count = 0;
		List<Prodotto> list = null;
		HttpSession session = null;
		Utente ut = null;
		try {
			session = request.getSession();
			ut = (Utente) session.getAttribute(Constants.UTENTE_SESSIONE);
			list = new ArrayList<>();
			if(ut != null) {
				
			}
			count = list.size();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return count;
	}

	@Override
	public String aggiungiAlCarrello(HttpServletRequest request, @RequestBody Prodotto form){
		HttpSession session = null;
		Utente ut = null;
		try {
			session = request.getSession();
			ut = (Utente) session.getAttribute(Constants.UTENTE_SESSIONE);
			if(ut == null) {
				String newUtente = "Utente";
				Integer random_int = (int)Math.floor(Math.random());
				newUtente += random_int.toString();
				ut = new Utente();
				ut.setNome(newUtente);
				ut.setCognome("");
				ut.setEmail("");
				session.setAttribute(Constants.UTENTE_SESSIONE, ut);
				uteService.insertUtente(ut);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return "OK";
	}

}
