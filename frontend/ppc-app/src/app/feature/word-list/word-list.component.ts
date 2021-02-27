import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WordListService } from './word-list.service';


@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  listaParole: string[];
  @Output() listaParoleChange = new EventEmitter();

  constructor(
    public paroleService: WordListService
    ) {
  }

  ngOnInit() {
  }

  delete(word: string): void {
    this.paroleService.delete(word);
    this.listaParoleChange.emit();
  }

}
