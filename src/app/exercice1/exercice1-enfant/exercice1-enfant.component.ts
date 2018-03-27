import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  constructor() { }

  @Input() compteur: number;

  @Output() changementCompteur = new EventEmitter();

  ngOnInit() {
  }

  increment(){
  	this.compteur++;
  	this.changementCompteur.emit({
  		value: this.compteur
  	});
  }

  decrement(){
  	this.compteur--;
  	this.changementCompteur.emit({value: this.compteur});
  }
}
