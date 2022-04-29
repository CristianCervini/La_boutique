package com.laboutiquedellafrutta.boutique.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.laboutiquedellafrutta.boutique.model.UtenteAutenticato;

@Component
@Transactional
public interface IUtenteRepository extends CrudRepository<UtenteAutenticato,Integer> {
	
	@Query(nativeQuery = true,value = "call INSERT_UTENTE(:nome,:cognome,:email)")   // call store procedure with arguments
    void insertUtente(
    		@Param("nome")String name,
    		@Param("cognome")String cognome,
    		@Param("email")String email
    		);

}
