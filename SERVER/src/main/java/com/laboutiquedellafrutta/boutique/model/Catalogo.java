package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "catalogo")
public class Catalogo implements Serializable {

    private static final long serialVersionUID = 160114084344686528L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "prodotto_id", referencedColumnName = "id", nullable = true)
    private Prodotto prodotto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }
}
