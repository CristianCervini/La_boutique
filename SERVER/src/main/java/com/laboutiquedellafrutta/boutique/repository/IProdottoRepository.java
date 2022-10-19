package com.laboutiquedellafrutta.boutique.repository;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IProdottoRepository extends CrudRepository<Prodotto,Long> {

    List<Prodotto> findAll();
    @Modifying
    @Transactional
    @Query(value = "insert into laboutique.prodotto (nome, descrizione) values (:nome,:descrizione)", nativeQuery = true)
    void registraProdotto(@Param("nome") String nome, @Param("descrizione") String descrizione);
}
