package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;

import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "indirizzo_utente")
public class IndirizzoUtente implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_INDIRIZZO")
    @SequenceGenerator(name="SEQ_INDIRIZZO", sequenceName="SEQ_INDIRIZZO", allocationSize=1)
    private Long id;
    
    @Column
    private String indirizzo;
    
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "utente_id", referencedColumnName = "idUtente", insertable = true, nullable = false)
    private Utente utente;

}
