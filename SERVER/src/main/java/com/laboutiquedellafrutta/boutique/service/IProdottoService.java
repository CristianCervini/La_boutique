package com.laboutiquedellafrutta.boutique.service;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProdottoService {
    public List<Prodotto> getListaProdotti() throws Exception;
}
