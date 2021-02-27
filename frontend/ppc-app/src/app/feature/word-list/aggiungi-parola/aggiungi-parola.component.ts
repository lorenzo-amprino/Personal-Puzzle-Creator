import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WordListService } from '../word-list.service';

@Component({
  selector: 'app-aggiungi-parola',
  templateUrl: './aggiungi-parola.component.html',
  styleUrls: ['./aggiungi-parola.component.css']
})
export class AggiungiParolaComponent implements OnInit {

  @Input() listaParole: string[];
  @Output() listaParoleChange = new EventEmitter();

  constructor(
    private paroleService: WordListService
  ) { }

  ngOnInit() {
  }

  aggiungi(parola: string): void {
    //faccio toUpper e controllo che siano solo lettere
    parola = parola.toUpperCase();
    console.log(/^([A-Z]*)$/.test(parola));
    if(/^([A-Z]*)$/.test(parola)){
      this.paroleService.listaParole.push(parola);
      this.listaParoleChange.emit();
      this.paroleService.calculateStats();
    }
    this.parola.reset();
  }

  parola = new FormControl('');
}
