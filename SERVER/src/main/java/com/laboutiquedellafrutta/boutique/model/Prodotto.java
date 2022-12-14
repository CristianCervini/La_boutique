package com.laboutiquedellafrutta.boutique.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name = "prodotto")
public class Prodotto implements Serializable {

	private static final long serialVersionUID = 160114084344686528L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_PRODOTTO")
	@SequenceGenerator(name="SEQ_PRODOTTO", sequenceName="SEQ_PRODOTTO", allocationSize=1)
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private String descrizione;

	@OneToMany(mappedBy = "prodotto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Catalogo> catalogoList;
	
}
