package com.laboutiquedellafrutta.boutique.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class UtenteAutenticato implements Serializable{

	private static final long serialVersionUID = 6906988150118026591L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long idUtente;
	@Column
	String nome;
	@Column 
	String cognome;
	@Column
	String email;
	@Column 
	String flgResponsabile;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFlgResponsabile() {
		return flgResponsabile;
	}
	public void setFlgResponsabile(String flgResponsabile) {
		this.flgResponsabile = flgResponsabile;
	}
	
	
	
}
