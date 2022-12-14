package com.laboutiquedellafrutta.boutique.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.laboutiquedellafrutta.boutique.model.Utente;
import com.laboutiquedellafrutta.boutique.repository.ICredenzialiRespository;
import com.laboutiquedellafrutta.boutique.repository.IUtenteRepository;
import com.laboutiquedellafrutta.boutique.service.IUtenteService;
import com.laboutiquedellafrutta.boutique.utils.RepositoryUtils;

@Service
public class UtenteServiceImpl implements IUtenteService{
	
	@Autowired
	IUtenteRepository uteRepo;	
	@Autowired
	ICredenzialiRespository credRepo;
	@Autowired
	RepositoryUtils repoUtils;

	@Override
	public void insertUtente(Utente ute) throws Exception {
		try {
			if(!credRepo.existsByUsername(ute.getCredenziali().getUsername())){
				repoUtils.save(ute, uteRepo);
			}else {
				throw new Exception("Errore - L'username inserito risulta registrato ad un profilo già presente");
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void registraUtente(Utente ute) throws Exception {
		if(!uteRepo.existsByEmail(ute.getEmail())){
			if(!credRepo.existsByUsername(ute.getCredenziali().getUsername())) {
				ute.addIndirizzoUtente(ute.getListaIndirizzi().get(0));
				ute.addCredenzialiUte(ute.getCredenziali());
				repoUtils.save(ute, uteRepo);
			} else {
				throw new Exception("Errore - L'username inserito risulta registrato ad un profilo già presente");
			}
		}else{
			throw new Exception("Errore - L'email inserita risulta registrata ad un profilo già presente");
		}
	}
}
