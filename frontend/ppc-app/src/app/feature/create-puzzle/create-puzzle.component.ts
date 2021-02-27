import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { PuzzleService } from './puzzle.service';

@Component({
  selector: 'app-create-puzzle',
  templateUrl: './create-puzzle.component.html',
  styleUrls: ['./create-puzzle.component.css']
})
export class CreatePuzzleComponent implements OnInit {

  constructor(
    private createPuzzleService: PuzzleService
  ) { }

  ngOnInit() {
  }

  puzzleForm = new FormGroup({
    page: new FormControl('', Validators.required),
    row: new FormControl('', Validators.required),
    col: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required)
  })


  onSubmit(){
    console.log(this.puzzleForm.getRawValue());
    this.createPuzzleService.createPuzzle(this.puzzleForm.getRawValue());
  }
}
