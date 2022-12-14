package com.laboutiquedellafrutta.boutique.repository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.laboutiquedellafrutta.boutique.model.CredenzialiLogin;

@Repository
public interface ICredenzialiRespository extends AbstractEntityRepository<CredenzialiLogin>{
	
	boolean existsByUsername(@Param("username") String username);
	
}
