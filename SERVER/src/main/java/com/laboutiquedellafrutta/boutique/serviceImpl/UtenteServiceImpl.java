package com.laboutiquedellafrutta.boutique.serviceImpl;

import com.laboutiquedellafrutta.boutique.model.IndirizzoUtente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.repository.IUtenteRepository;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;

import java.util.ArrayList;
import java.util.List;

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
//		String trovato = uteRepo.findUte(ute.getCodFiscale());
		boolean trovato = uteRepo.existsByEmail(ute.getEmail());
//		if(trovato.equalsIgnoreCase("false")){
		if(!trovato){
			ute.addIndirizzoUtente(ute.getListaIndirizzi().get(0));
			ute.addCredenzialiUte(ute.getCredenziali());
			uteRepo.save(ute);
		}else{
			throw new Exception("Errore - L'email inserità risulta registrata ad un profilo già presente");
		}
	}
}
