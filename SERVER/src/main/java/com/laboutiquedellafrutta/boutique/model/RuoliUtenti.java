package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;

import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "ruoli_utenti")
public class RuoliUtenti implements Serializable {

	private static final long serialVersionUID = -211013472427075336L;

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
}
