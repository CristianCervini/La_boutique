package com.laboutiquedellafrutta.boutique.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name = "utente")
public class Utente implements Serializable{

	private static final long serialVersionUID = 6906988150118026591L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_UTENTE")
	@SequenceGenerator(name="SEQ_UTENTE", sequenceName="SEQ_UTENTE", allocationSize=1)
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
	
//	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "utente")
	//@JoinColumn(name= "credenziali_id", referencedColumnName = "id")
	private CredenzialiLogin credenziali;

	public void addIndirizzoUtente(IndirizzoUtente indirizzo){
		if(listaIndirizzi == null){
			listaIndirizzi = new ArrayList<>();
		}
		indirizzo.setUtente(this);
		listaIndirizzi.add(indirizzo);
	}

	public void addCredenzialiUte(CredenzialiLogin cred){
		if(credenziali == null){
			credenziali = new CredenzialiLogin();
		}
		cred.setUtente(this);
		credenziali = cred;
	}
}
