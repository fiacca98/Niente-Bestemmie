import { Character } from '../character';
import { Component, Input, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  items: Character[];
  
  @Output()
  change: EventEmitter<Character> = new EventEmitter<Character>();

  showData(item:Character){
    this.change.emit(item);
  }
  
  }
