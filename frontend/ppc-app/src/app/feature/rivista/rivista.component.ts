import { Component, OnInit } from '@angular/core';
import { Rivista } from 'src/app/model/Rivista';
import { RivistaService } from '../create-rivista/rivista.service';

@Component({
  selector: 'app-rivista',
  templateUrl: './rivista.component.html',
  styleUrls: ['./rivista.component.css']
})
export class RivistaComponent implements OnInit {

  constructor(
    public createRivistaService: RivistaService
  ) { 
    createRivistaService.getRiviste();
  }

  ngOnInit() {
    this.rivisteSalvate = this.createRivistaService.rivisteSalvate;
  }

  rivisteSalvate: Rivista[];

  delete(id: string): void {
    this.createRivistaService.deleteRivista(id);
  }

}
