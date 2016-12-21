import { Component } from '@angular/core';
export class Recept {
  id: number;
  title: string;
}
//test
const RECEPTS: Recept[] = [
  { id: 11, title: 'Боб по ловджийски' },
  { id: 12, title: 'Спагети болонезе' },
  { id: 13, title: 'Картофи по родопски' },
  { id: 14, title: 'Телешко варено' },
  { id: 15, title: 'Яйца по панагюрски' }
];
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
    <div *ngIf="selectedRecept">
      <h2>{{selectedRecept.title}} details!</h2>
      <div><label>id: </label>{{selectedRecept.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedRecept.title" placeholder="name"/>
      </div>
    </div>
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
  `]
})
export class AppComponent {
  title = 'Рецепти!';
  recepts = RECEPTS;
  selectedRecept: Recept;
  onSelect(recept: Recept): void {
    this.selectedRecept = recept;
  }
}
