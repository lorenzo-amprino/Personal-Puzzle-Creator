import { Component, OnInit } from '@angular/core';
import { Rivista } from 'src/app/model/Rivista';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RivistaService } from './rivista.service';

@Component({
  selector: 'app-create-rivista',
  templateUrl: './create-rivista.component.html',
  styleUrls: ['./create-rivista.component.css']
})
export class CreateRivistaComponent implements OnInit {

  constructor(
    private rivistaService: RivistaService
  ) { }

  ngOnInit() {    
  }

  rivista: Rivista;

  rivistaForm = new FormGroup({
    nRivista: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.rivistaForm.getRawValue());

    this.rivistaService.createRivista(this.rivistaForm.getRawValue());
  }

}
