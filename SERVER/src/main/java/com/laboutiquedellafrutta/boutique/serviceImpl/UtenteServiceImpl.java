package com.laboutiquedellafrutta.boutique.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.laboutiquedellafrutta.boutique.model.UtenteAutenticato;
import com.laboutiquedellafrutta.boutique.repository.IUtenteRepository;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;

@Service
public class UtenteServiceImpl implements IUtenteService{
	
	@Autowired
	IUtenteRepository uteRepo;

	@Transactional
	@Override
	public void insertUtente(UtenteAutenticato ute) throws Exception {
		try {
			uteRepo.insertUtente(ute.getNome(),ute.getCognome(), ute.getEmail());
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
