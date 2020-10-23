import { Component, OnInit } from '@angular/core';
import { Client } from "../modules/client";

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.scss']
})
export class FormulaireClientComponent implements OnInit {

  public client: Client;

  constructor() { }

  ngOnInit(): void {

    this.client = {
      nom: '',
      prenom: '',
      adresse: '',
      codepostal: undefined,
      ville: '',
      pays: '',
      tel: undefined,
      mail: '',
      passwd: '',
      passwdConf: '',
      civilite: ''
    }


  }

  save(model: Client, isValid: boolean){
    if(isValid){
      this.client = model;
    }
    console.log(model, isValid);
  }

}
