package com.laboutiquedellafrutta.boutique.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.laboutiquedellafrutta.boutique.model.Prodotto;

@CrossOrigin("*")
@RestController
public class ProdottiController {

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
			list = new ArrayList<>();
		}
		return list;
	}
}
