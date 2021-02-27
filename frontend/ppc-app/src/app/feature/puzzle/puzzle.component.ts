import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../create-puzzle/puzzle.service';
import { Puzzle } from 'src/app/model/puzzle';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent {

  puzzle: Puzzle;

  constructor(
    public createPuzzleService: PuzzleService
  ) { 
    console.log(createPuzzleService.createdPuzzle.schema)
    console.log(createPuzzleService.createdPuzzle)
  }

}
