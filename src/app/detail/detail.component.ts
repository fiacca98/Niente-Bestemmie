import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { ComunicatorService } from '../comunicator.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  characterSelected: Character;

  constructor(private comunicatorService: ComunicatorService) { 

    this.comunicatorService.mySubject$.subscribe(newValue => { 
      
      this.characterSelected = newValue; 
    
    });

  }

  ngOnInit() {

  }

}
