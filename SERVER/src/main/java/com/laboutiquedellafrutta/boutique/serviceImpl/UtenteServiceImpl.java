package com.laboutiquedellafrutta.boutique.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.repository.IUtenteRepository;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;

@Service
public class UtenteServiceImpl implements IUtenteService{
	
	@Autowired
	IUtenteRepository uteRepo;

	@Transactional
	@Override
	public void insertUtente(Utente ute) throws Exception {
		try {
			uteRepo.insertUtente(ute.getNome(),ute.getCognome(), ute.getEmail());
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void registraUtente(Utente ute) throws Exception {
		String trovato = uteRepo.findUte(ute.getCodFiscale());
		if(trovato.equalsIgnoreCase("false"))
			uteRepo.save(ute);
	}
}
