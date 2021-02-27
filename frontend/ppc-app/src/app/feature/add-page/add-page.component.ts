import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Puzzle } from 'src/app/model/puzzle';
import { Rivista } from 'src/app/model/Rivista';
import { Template } from 'src/app/model/template';
import { RivistaPuzzle } from 'src/app/model/rivistaPuzzle';
import { PuzzleService } from '../create-puzzle/puzzle.service';
import { RivistaService } from '../create-rivista/rivista.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  @Input() rivista: Rivista;

  wordList: string[];
  templates: Template[];
  templatesFiltered: Template[];

  constructor(
    private rivistaService: RivistaService,
    private puzzleService: PuzzleService
  ) {
  }

  ngOnInit() {
    this.puzzleService.getTemplates().subscribe(res =>{
      this.templates = res.data; 
      this.templatesFiltered = res.data; 
    });

    this.paginaForm.get("page").valueChanges.subscribe(x => {
      this.filterTemplate(parseInt(x));
    })

  }

  paginaForm = new FormGroup({
    page: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    template: new FormControl('',Validators.required)
  })  

  onSubmit() {
    console.log(this.paginaForm.getRawValue());
    let request= {wordList: this.wordList, ...this.paginaForm.getRawValue()};

    var obs = this.puzzleService.createPuzzle(request);

    let createdPuzzle: Puzzle;
    obs.subscribe(c => {
      createdPuzzle = c.data
      if (this.rivista.puzzles == undefined) {
        this.rivista.puzzles = [];
      }
      this.rivista.puzzles.push(this.mapPuzzle(createdPuzzle));
      this.rivistaService.updateRivista(this.rivista);
    });

  }

  mapPuzzle(puzzle: Puzzle): RivistaPuzzle {
    let rivistaPuzzle = new RivistaPuzzle();
    rivistaPuzzle.id = puzzle.id;
    rivistaPuzzle.nome = puzzle.nome;
    rivistaPuzzle.nPagina = puzzle.nPagina;
    return rivistaPuzzle;
  }

  onWordsLoaded(wordList: string[]) {
    this.wordList = wordList;
  }


  filterTemplate(selectedPage: number): void{
    this.templatesFiltered = this.templates.slice();
    this.templatesFiltered = this.templatesFiltered.filter(
      t => t.defaultPages.find(
        p => {
          if (p === selectedPage) return true;
          return false;
        }));
  }


  pages = [
    {val: 4, label: "pagina 4 A"},
    {val: 4, label: "pagina 4 B"},
    {val: 5, label: "pagina 5"},
    {val: 7, label: "pagina 7"},
    {val: 9, label: "pagina 9"},
    {val: 11, label: "pagina 11"},
    {val: 12, label: "pagina 12"},
    {val: 14, label: "pagina 14"},
    {val: 15, label: "pagina 15"},
    {val: 17, label: "pagina 17"},
    {val: 19, label: "pagina 19"},
    {val: 21, label: "pagina 21"},
    {val: 23, label: "pagina 23"},
    {val: 24, label: "pagina 24"},
    {val: 24, label: "pagina 24"},
    {val: 24, label: "pagina 24"},
    {val: 25, label: "pagina 25"},
    {val: 26, label: "pagina 26"},
    {val: 26, label: "pagina 26"},
    {val: 27, label: "pagina 27"},
    {val: 29, label: "pagina 29"},
    {val: 31, label: "pagina 31"},
    {val: 33, label: "pagina 33"},
    {val: 34, label: "pagina 34"},
    {val: 37, label: "pagina 37"},
    {val: 38, label: "pagina 38"},
    {val: 39, label: "pagina 39"},
    {val: 40, label: "pagina 40"},
    {val: 40, label: "pagina 40"},
    {val: 40, label: "pagina 40"},
    {val: 41, label: "pagina 41"},
    {val: 43, label: "pagina 43"},
    {val: 44, label: "pagina 44"},
    {val: 47, label: "pagina 47"},
    {val: 47, label: "pagina 47"},
    {val: 49, label: "pagina 49"},
    {val: 51, label: "pagina 51"},
    {val: 53, label: "pagina 53"},
    {val: 55, label: "pagina 55"},
    {val: 57, label: "pagina 57"},
    {val: 59, label: "pagina 59"},
  ]
 

}
