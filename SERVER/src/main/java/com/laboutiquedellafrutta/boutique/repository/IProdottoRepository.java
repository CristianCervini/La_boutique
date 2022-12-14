package com.laboutiquedellafrutta.boutique.repository;

import com.laboutiquedellafrutta.boutique.model.Prodotto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProdottoRepository extends AbstractEntityRepository<Prodotto> {

    List<Prodotto> findAllByOrderByNomeAsc();
    
}
