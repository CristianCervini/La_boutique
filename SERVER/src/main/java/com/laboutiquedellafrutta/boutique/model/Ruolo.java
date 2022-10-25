package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "ruolo")
public class Ruolo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_RUOLO")
    @SequenceGenerator(name="SEQ_RUOLO", sequenceName="SEQ_RUOLO", allocationSize=1)
    private Long id;
    @Column(name = "ruolo")
    private String nomeRuolo;
    @OneToMany(mappedBy = "ruolo")
    private List<RuoliUtenti> listRuoliUte;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeRuolo() {
        return nomeRuolo;
    }

    public void setNomeRuolo(String nomeRuolo) {
        this.nomeRuolo = nomeRuolo;
    }

    public List<RuoliUtenti> getListRuoliUte() {
        return listRuoliUte;
    }

    public void setListRuoliUte(List<RuoliUtenti> listRuoliUte) {
        this.listRuoliUte = listRuoliUte;
    }
}
