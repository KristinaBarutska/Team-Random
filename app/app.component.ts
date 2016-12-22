import { Component, OnInit } from '@angular/core';
import { Recept } from './Recept';
import { ReceptService } from './recept.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Рецепти</h2>
    <ul class="recepts">
      <li *ngFor="let recept of recepts"
        [class.selected]="recept === selectedRecept"
        (click)="onSelect(recept)">
        <span class="badge">{{recept.id}}</span> {{recept.title}}
      </li>
    </ul>
    <my-recept-detail [recept]="selectedRecept"></my-recept-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .recept {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .recept li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .recept li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .recept li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .recept .text {
      position: relative;
      top: -3px;
    }
    .recept .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [ReceptService]
})
export class AppComponent implements OnInit {
  title = 'Recepts';
  recepts: Recept[];
  selectedRecept: Recept;
  constructor(private receptService: ReceptService) { }
  getRecepts(): void {
    this.receptService.getRecepts().then(recepts => this.recepts = recepts);
  }
  ngOnInit(): void {
    this.getRecepts();
  }
  onSelect(recept: Recept): void {
    this.selectedRecept = recept;
  }
}
