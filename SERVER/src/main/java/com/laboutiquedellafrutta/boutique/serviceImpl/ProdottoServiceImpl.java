package com.laboutiquedellafrutta.boutique.serviceImpl;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.repository.IProdottoRepository;
import com.laboutiquedellafrutta.boutique.service.IProdottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdottoServiceImpl implements IProdottoService {

    @Autowired
    IProdottoRepository repo;

    @Override
    public List<Prodotto> getListaProdotti() throws Exception {
        try{
            return repo.findAll();
        }catch (Exception e){
            e.printStackTrace();
            throw(e);
        }
    }
}
