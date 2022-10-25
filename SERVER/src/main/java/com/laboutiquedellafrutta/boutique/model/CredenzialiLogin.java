package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
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
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "credenziali")
    //@JoinColumn(name= "utente_id", referencedColumnName = "idUtente")
    private Utente utente;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Utente getUtente() {
        return utente;
    }

    public void setUtente(Utente utente) {
        this.utente = utente;
    }
}
