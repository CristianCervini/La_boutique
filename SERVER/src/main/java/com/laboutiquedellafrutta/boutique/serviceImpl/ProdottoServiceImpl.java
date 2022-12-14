package com.laboutiquedellafrutta.boutique.serviceImpl;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import com.laboutiquedellafrutta.boutique.repository.IProdottoRepository;
import com.laboutiquedellafrutta.boutique.service.IProdottoService;
import com.laboutiquedellafrutta.boutique.utils.RepositoryUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdottoServiceImpl implements IProdottoService {

    @Autowired
    IProdottoRepository repo;
    @Autowired
    RepositoryUtils repoUtils;

    @Override
    public List<Prodotto> getListaProdotti() throws Exception {
        try{
            List<Prodotto> list =  repo.findAllByOrderByNomeAsc();
            return list;
        }catch (Exception e){
            e.printStackTrace();
            throw(e);
        }
    }

    @Override
    public void registraProdotto(Prodotto prodotto) throws Exception {
    	try {
    		List<Prodotto> list =  repo.findAllByOrderByNomeAsc();
            boolean trovato = list.stream()
                    .anyMatch(x -> x.getNome().equalsIgnoreCase(prodotto.getNome())
                            && x.getDescrizione().equalsIgnoreCase(prodotto.getDescrizione())
                    );
        	if(!trovato){
            	repoUtils.save(prodotto, repo);
            }else{
                String msg = "Errore - L'elemento " + prodotto.getNome()
                        + ", " + prodotto.getDescrizione() + " è già presente nella lista";
                throw new Exception(msg);
            }
    	} catch (Exception e) {
    		throw e;
    	}
        
    }

    @Override
    public void cancellaProdotto(Long idProdotto) throws Exception {
    	try {
    		repoUtils.deleteById(idProdotto, repo);
    	} catch (Exception e) {
    		throw e;
    	}
        
    }

    @Override
    public void modificaProdotto(Prodotto prodotto) throws Exception {
    	try {
    		repoUtils.save(prodotto, repo);
    	} catch(Exception e) {
    		throw e;
    	}
    	
    }
}
