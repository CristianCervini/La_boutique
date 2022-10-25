package com.laboutiquedellafrutta.boutique.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "utente")
public class Utente implements Serializable{

	private static final long serialVersionUID = 6906988150118026591L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idUtente;
	@Column
	private String nome;
	@Column
	private String cognome;
	@Column(name = "cod_fiscale")
	private String codFiscale;
	@Column
	private String email;
	@OneToMany(mappedBy = "utente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<IndirizzoUtente> listaIndirizzi;
	@OneToMany(mappedBy = "utente")
	private List<RuoliUtenti> listRuoliUte;
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name= "credenziali_id", referencedColumnName = "id")
	private CredenzialiLogin credenziali;

	public Long getIdUtente() {
		return idUtente;
	}

	public void setIdUtente(Long idUtente) {
		this.idUtente = idUtente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getCodFiscale() {
		return codFiscale;
	}

	public void setCodFiscale(String codFiscale) {
		this.codFiscale = codFiscale;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<IndirizzoUtente> getListaIndirizzi() {
		return listaIndirizzi;
	}

	public void setListaIndirizzi(List<IndirizzoUtente> listaIndirizzi) {
		this.listaIndirizzi = listaIndirizzi;
	}

	public List<RuoliUtenti> getListRuoliUte() {
		return listRuoliUte;
	}

	public void setListRuoliUte(List<RuoliUtenti> listRuoliUte) {
		this.listRuoliUte = listRuoliUte;
	}

	public CredenzialiLogin getCredenziali() {
		return credenziali;
	}

	public void setCredenziali(CredenzialiLogin credenziali) {
		this.credenziali = credenziali;
	}
}
