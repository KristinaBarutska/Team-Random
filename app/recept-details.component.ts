import { Component, Input } from '@angular/core';
import { Recept } from './Recept';

@Component({
  selector: 'my-recept-detail',
  template: `
  <div *ngIf="recept">
    <h2>{{recept.title}} details!</h2>
    <div><label>id: </label>{{recept.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="recept.title" placeholder="title"/>
    </div>
  </div>
`
})
export class ReceptDetailComponent {
    @Input()
    recept: Recept;
}
