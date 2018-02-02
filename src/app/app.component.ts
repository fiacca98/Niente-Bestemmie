import { Component } from '@angular/core';
import { Character } from './character';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ;
  items: Character[] = [];
  valore: string;

  constructor(private listService: ListService) {
    this.title = 'barbra streisand';
    this.items = this.listService.getCharacterList();
  }

  showValue(){
    alert("valore: " + this.valore);
    this.valore = "";
  }

}
