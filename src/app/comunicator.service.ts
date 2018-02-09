import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Character } from './character';

@Injectable()
export class ComunicatorService {
  private mySubject = new Subject<Character>();
  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value: Character) {

    this.mySubject.next(value); 
  
  }

}
