import { Injectable } from '@angular/core';

import { Recept } from './Recept';
import { RECEPTS } from './mock-recepts'

@Injectable()
export class ReceptService {
  getRecepts(): Promise<Recept[]> {
    return Promise.resolve(RECEPTS);
  }
}
