package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;

import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "catalogo")
public class Catalogo implements Serializable {

    private static final long serialVersionUID = 160114084344686528L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_CATALOGO")
    @SequenceGenerator(name="SEQ_CATALOGO", sequenceName="SEQ_CATALOGO", allocationSize=1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "prodotto_id", referencedColumnName = "id", nullable = true)
    private Prodotto prodotto;

}
