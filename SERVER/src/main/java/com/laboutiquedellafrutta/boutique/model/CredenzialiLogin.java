package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;

import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "credenziali")
public class CredenzialiLogin implements Serializable {

    private static final long serialVersionUID = -1;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_CREDENZIALI")
    @SequenceGenerator(name="SEQ_CREDENZIALI", sequenceName="SEQ_CREDENZIALI", allocationSize=1)
    private Long id;
    
    @Column
    private String username;
    
    @Column
    private String password;
    
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name= "utente_id", referencedColumnName = "idUtente")
    private Utente utente;

}
