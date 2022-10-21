import { Component, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { Page } from '../model/page';
import { Prodotto } from '../model/prodotto.model';
import { CallApiService } from '../service/call-api.service';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insert-prodotti',
  templateUrl: './insert-prodotti.component.html',
  styleUrls: ['./insert-prodotti.component.css']
})
export class InsertProdottiComponent implements OnInit {

  listaProdotti: Prodotto[] =[];
  page = 1;
	pageSize = 5;

  penIcon = faPen;
  trashIcon = faTrash;

  insertForm = this.istanziaForm();
  editForm = this.istanziaForm();
  prodottoDaCancellare: number;

  istanziaForm(): FormGroup{
    return new FormGroup({          
      id: new FormControl(0), 
      nome: new FormControl(''),
      descrizione: new FormControl(''),
    })
  }

  valoreFiltri : string; 
  filtri: Array<object> = [
    [
      {
        nome : 'prodotto',
        label : 'Filtro prodotto',
        type : 'input'
      }
    ]
  ];

  constructor(
    private service: CallApiService,
    config: NgbModalConfig, 
    private modalService: NgbModal, 
    private builder: FormBuilder,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getListaProdotti();
  }

  inserisciProdotto(value: any){
    this.service.registraProdotto(value).subscribe((result: string) =>{
      this.gestisciRisposta(result['response']);
    });
  }

  getListaProdotti(){
    this.service.getListaProdotti().subscribe((data: Prodotto[])=>{
      this.listaProdotti = [];
      data.forEach((item, index) => {
        item["numero"] = index+1;
        this.listaProdotti.push(item);
      });
    })
  }

  modificaProdotto(prodotto: Prodotto, content: any){
    this.editForm = this.builder.group({
      id: prodotto.id,
      nome: prodotto.nome,
      descrizione: prodotto.descrizione,
    });
    this.open(content);
  }
  
  eliminaProdotto(prodotto: Prodotto, content: any){
    this.prodottoDaCancellare = prodotto.id;
    this.open(content);
  }

  open(content: any){
    this.modalService.open(content);
  }

  salvaModifiche(form: any){
    this.service.modificaProdotto(form.value).subscribe((result: any)=>{
      this.gestisciRisposta(result['response']);
    })
  }

  cancellaProdotto(idProdotto: number){
    this.service.deleteProdotto(idProdotto).subscribe((result: any)=>{
      this.gestisciRisposta(result['response']);
    })
  }

  gestisciRisposta(response: any){
    if(response === 'OK'){
      this.getListaProdotti();
      this.pulisciCampiInsertProdotto();
    }
    let alert: Alert = this.getMessage(response);
    this.service.toggleAlertList([alert]);
  }

  pulisciCampiInsertProdotto(){
    this.insertForm = this.istanziaForm();
  }

  getMessage(response: any){
    if(response === 'OK'){
      return {
        type: 'success',
        msg: 'Operazione eseguita con successo'
      }
    }else if(response !== 'OK' && response !== ''){
      return {
        type: 'danger',
        msg: response
      }
    }else{
      return{
        type: 'danger',
        msg: 'Errore'
      }
    }
  }

}
