package com.laboutiquedellafrutta.boutique.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.laboutiquedellafrutta.boutique.model.Utente;

@Repository
public interface IUtenteRepository extends AbstractEntityRepository<Utente> {
	
	boolean existsByEmail(@Param("email") String email);
	
}
