import { Component, OnInit } from '@angular/core';
import { RivistaService } from '../create-rivista/rivista.service';
import { ActivatedRoute } from '@angular/router';
import { Rivista } from 'src/app/model/Rivista';
import { Puzzle } from 'src/app/model/puzzle';
import { PuzzleService } from '../create-puzzle/puzzle.service';

@Component({
  selector: 'app-modifica-rivista',
  templateUrl: './modifica-rivista.component.html',
  styleUrls: ['./modifica-rivista.component.css']
})
export class ModificaRivistaComponent implements OnInit {

  constructor(
    public rivistaService: RivistaService,
    private route: ActivatedRoute,
    private puzzleService: PuzzleService
  ) { }

  ngOnInit() {
    this.getRivista();
  }

  rivista: Rivista;

  getRivista(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.rivistaService.getRivista(id)
      .subscribe(res => this.rivista = res.data)
  }


  deletePuzzle(puzzle: Puzzle): void {
    this.rivista.puzzles = this.rivista.puzzles.filter(obj => obj !== puzzle);
    this.puzzleService.deletePuzzle(puzzle.id);
    this.rivistaService.updateRivista(this.rivista);
  }

}
