package com.laboutiquedellafrutta.boutique.service;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProdottoService {
	
    public List<Prodotto> getListaProdotti() throws Exception;
    
    public void registraProdotto(Prodotto prodotto) throws Exception;

    void cancellaProdotto(Long idProdotto)throws Exception;

    void modificaProdotto(Prodotto prodotto)throws Exception;
}
