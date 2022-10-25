package com.laboutiquedellafrutta.boutique.model;

import java.io.Serializable;
import java.sql.Blob;
import java.util.List;

import javax.persistence.*;

@Entity
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
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public List<Catalogo> getCatalogoList() {
		return catalogoList;
	}

	public void setCatalogoList(List<Catalogo> catalogoList) {
		this.catalogoList = catalogoList;
	}
}
