package com.laboutiquedellafrutta.boutique.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.laboutiquedellafrutta.boutique.model.Utente;

@Component
@Transactional
@Repository
public interface IUtenteRepository extends CrudRepository<Utente,Integer> {
	
	@Query(nativeQuery = true,value = "call INSERT_UTENTE(:nome,:cognome,:email)")   // call store procedure with arguments
    void insertUtente(
    		@Param("nome")String name,
    		@Param("cognome")String cognome,
    		@Param("email")String email
    		);

	/*@Query(value = "select case " +
			"when (count(select id_utente " +
						"from utente " +
						"where upper(cod_fiscale) = upper(:codFiscale)" +
					") > 0) " +
			"then true " +
			"else false " +
			"end")*/
	@Query(value = "select case " +
			"when (count(id_utente) > 0) " +
			"then 'true' " +
			"else 'false' " +
			"end " +
			"from utente " +
			"where upper(cod_fiscale) = upper(:codFiscale)", nativeQuery = true)
	String findUte(@Param("codFiscale") String codFiscale);

	Utente save(Utente ute);
}
