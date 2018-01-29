import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'barbra streisand';
  items: string[] = [];

  constructor(){
    this.items.push("pippo");
    this.items.push("pluto");
    this.items.push("paperino");
    this.items.push("topolino");
  }
  
}
