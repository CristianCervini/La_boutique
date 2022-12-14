package com.laboutiquedellafrutta.boutique.model;

import javax.persistence.*;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
@Table(name = "ruolo")
public class Ruolo implements Serializable {
	
	private static final long serialVersionUID = 5627047152419860837L;

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_RUOLO")
    @SequenceGenerator(name="SEQ_RUOLO", sequenceName="SEQ_RUOLO", allocationSize=1)
    private Long id;
    
    @Column(name = "ruolo")
    private String nomeRuolo;
    
    @OneToMany(mappedBy = "ruolo")
    private List<RuoliUtenti> listRuoliUte;
}
