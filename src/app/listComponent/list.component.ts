import { Character } from '../character';
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  items: Character[];
  
  constructor(private comunicatorService: ComunicatorService, private listService: ListService){

  }

  ngOnInit() {
    this.items= this.listService.getCharacterList();
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
  showData(item:Character){
    // chiamo il next nel subject;
    this.comunicatorService.changeSubject(item);
  }
  
}
