package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "indirizzo_utente")
public class IndirizzoUtente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_INDIRIZZO")
    @SequenceGenerator(name="SEQ_INDIRIZZO", sequenceName="SEQ_INDIRIZZO", allocationSize=1)
    private Long id;
    @Column
    private String indirizzo;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "utente_id", referencedColumnName = "idUtente", nullable = true)
    private Utente utente;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }
}
