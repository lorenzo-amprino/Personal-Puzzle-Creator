import { Injectable } from '@angular/core';
import { Puzzle } from 'src/app/model/puzzle';
import { Statistica } from './stats-parole/statistica';

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  listaParole: string[];
  puzzle: Puzzle;

  totParole: number;
  statistiche: Statistica[]

  constructor() { }

  delete(word: string): void {
    this.listaParole = this.listaParole.filter(obj => obj !== word);
  }

  add(word:string){
    if(this.listaParole.indexOf(word) < 0){
      this.listaParole.push(word);
    }
    this.listaParole.sort();
  }
  

  calculateStats(){
    this.statistiche = [];
    this.totParole = this.listaParole.length;
    let paroleControllate = 0;
    for( let x = 1 ; ; x++){
      let value = this.listaParole.filter(p => p.length == x).length;
      paroleControllate += value;

      if(value > 0){
        this.statistiche.push({key: x, value: value})
        if(paroleControllate >= this.totParole){
          break;
        }
      }
    }
  }

}
