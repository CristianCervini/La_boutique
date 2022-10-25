package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ruoli_utenti")
public class RuoliUtenti implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_RUOLO_UTE")
    @SequenceGenerator(name="SEQ_RUOLO_UTE", sequenceName="SEQ_RUOLO_UTE", allocationSize=1)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "utente_id", referencedColumnName = "idUtente")
    private Utente utente;
    @ManyToOne
    @JoinColumn(name = "ruolo_id", referencedColumnName = "id")
    private Ruolo ruolo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }

    public Ruolo getRuolo() {
        return ruolo;
    }

    public void setRuolo(Ruolo ruolo) {
        this.ruolo = ruolo;
    }
}
