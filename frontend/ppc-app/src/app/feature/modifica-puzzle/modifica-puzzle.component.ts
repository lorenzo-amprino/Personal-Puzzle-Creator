import { Component, OnInit, ViewChild } from '@angular/core';
import { PuzzleService } from '../create-puzzle/puzzle.service';
import { ActivatedRoute } from '@angular/router';
import { Puzzle } from 'src/app/model/puzzle';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { WordListService } from '../word-list/word-list.service';
import { StatsParoleComponent } from '../word-list/stats-parole/stats-parole.component';

@Component({
  selector: 'app-modifica-puzzle',
  templateUrl: './modifica-puzzle.component.html',
  styleUrls: ['./modifica-puzzle.component.css'],
})
export class ModificaPuzzleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private puzzleService: PuzzleService,
    private paroleService: WordListService
  ) { }

  ngOnInit() {
    this.getPuzzle();
    this.listaParole = this.paroleService.listaParole;
  }

  puzzle: Puzzle;
  id: string;
  listaParole: string[];
  
  getPuzzle() {
    const id = this.route.snapshot.paramMap.get('id')
    this.id = id;
    this.puzzleService.getPuzzle(this.id)
      .subscribe(res => {
        this.puzzle = res.data
        this.paroleService.listaParole = this.puzzle.listaParole;
        this.listaParole = this.paroleService.listaParole;
        this.puzzleForm.patchValue({
          nPagina: this.puzzle.nPagina,
          nome: this.puzzle.nome
        })
      })
  }

  puzzleForm = new FormGroup({
    nPagina: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required)
  })

  onSubmit(){
    let request = {listaParole: this.paroleService.listaParole, id: this.id,  ...this.puzzleForm.getRawValue()};
    this.puzzleService.updatePuzzle(request);
  }

  onWordsLoaded(listaParole: string[]) {
    this.paroleService.listaParole = listaParole;
    this.listaParole = listaParole;
  }

  onListaParoleChange(){
    this.listaParole = this.paroleService.listaParole;
    let request = {listaParole: this.listaParole, id: this.id,  ...this.puzzleForm.getRawValue()};
    this.puzzleService.updatePuzzle(request);
    this.paroleService.calculateStats();
  }

}
