import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../modules/client";

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {

  }

}
