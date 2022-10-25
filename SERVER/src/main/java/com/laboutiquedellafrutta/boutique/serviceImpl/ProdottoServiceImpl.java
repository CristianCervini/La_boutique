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
            List<Prodotto> list =  repo.findAllByOrderByNomeAsc();
            return list;
        }catch (Exception e){
            e.printStackTrace();
            throw(e);
        }
    }

    @Override
    public void registraProdotto(Prodotto prodotto) throws Exception {
        List<Prodotto> list =  repo.findAllByOrderByNomeAsc();
        boolean trovato = list.stream()
                .anyMatch(x -> x.getNome().equalsIgnoreCase(prodotto.getNome())
                        && x.getDescrizione().equalsIgnoreCase(prodotto.getDescrizione())
                );
        if(!trovato){
            repo.registraProdotto(prodotto.getNome(), prodotto.getDescrizione());
        }else{
            String msg = "Errore - L'elemento " + prodotto.getNome()
                    + ", " + prodotto.getDescrizione() + " è già presente nella lista";
            throw new Exception(msg);
        }
    }

    @Override
    public void cancellaProdotto(Long idProdotto) throws Exception {
        repo.deleteById(idProdotto);
    }

    @Override
    public void modificaProdotto(Prodotto prodotto) throws Exception {
        repo.updateNomeAndDescrizioneById(prodotto.getId(),prodotto.getNome(), prodotto.getDescrizione());
    }
}
