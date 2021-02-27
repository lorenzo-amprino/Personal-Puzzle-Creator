import { Component, OnInit, Input } from '@angular/core';
import { Statistica } from './statistica';
import { WordListService } from '../word-list.service';

@Component({
  selector: 'app-stats-parole',
  templateUrl: './stats-parole.component.html',
  styleUrls: ['./stats-parole.component.css']
})
export class StatsParoleComponent implements OnInit {

  constructor(
    public paroleService: WordListService
  ) { }

  ngOnInit() {
    this.paroleService.calculateStats();
  }
  

}
