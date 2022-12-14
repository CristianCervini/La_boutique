package com.laboutiquedellafrutta.boutique.controller_impl;

import java.util.List;

import com.laboutiquedellafrutta.boutique.model.ResponseString;
import com.laboutiquedellafrutta.boutique.service.IProdottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.laboutiquedellafrutta.boutique.constants.Paths;
import com.laboutiquedellafrutta.boutique.controller.ProdottiController;
import com.laboutiquedellafrutta.boutique.model.Prodotto;

@RequestMapping(value = {Paths.PRODOTTI})
@RestController
public class ProdottiControllerImpl implements ProdottiController {
	
	@Autowired
	private IProdottoService prodottoService;

	@Override
	public List<Prodotto> getListaProdotti(){
		try {
			return prodottoService.getListaProdotti();
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	

	@Override
	public ResponseString registraProdotto(@RequestBody Prodotto prodotto){
		ResponseString result = null;
		try{
			prodottoService.registraProdotto(prodotto);
			result = new ResponseString("OK");
		} catch (Exception e){
			e.printStackTrace();
			String msg = "Errore durante la registrazione del prodotto";
			if(e.getMessage().indexOf("Errore -") > -1){
				msg = e.getMessage();
			}
			result = new ResponseString(msg);
		}
		return result;
	}

	@Override
	public ResponseString cancellaProdotto(@RequestBody Long idProdotto){
		ResponseString result = null;
		try{
			prodottoService.cancellaProdotto(idProdotto);
			result = new ResponseString("OK");
		} catch (Exception e){
			e.printStackTrace();
			result = new ResponseString("Errore durante la registrazione del prodotto");
		}
		return result;
	}

	@Override
	public ResponseString modificaProdotto(@RequestBody Prodotto prodotto){
		ResponseString result = null;
		try{
			prodottoService.modificaProdotto(prodotto);
			result = new ResponseString("OK");
		} catch (Exception e){
			e.printStackTrace();
			result = new ResponseString("Errore durante la registrazione del prodotto");
		}
		return result;
	}

}
