package com.laboutiquedellafrutta.boutique.serviceImpl;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.repository.IProdottoRepository;
import com.laboutiquedellafrutta.boutique.service.IProdottoService;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdottoServiceImpl implements IProdottoService {

    @Autowired
    IProdottoRepository repo;

    @Override
    public List<Prodotto> getListaProdotti() throws Exception {
        Prodotto prod = null;
        try{
            prod = new Prodotto();
            List<Prodotto> list =  repo.findAll();
            return list;
        }catch (Exception e){
            e.printStackTrace();
            throw(e);
        }
    }

    @Override
    public void registraProdotto(Prodotto prodotto) throws Exception {
        try{
            repo.registraProdotto(prodotto.getNome(), prodotto.getDescrizione());
        } catch (Exception e){
            e.printStackTrace();
            throw(e);
        }
    }
}
