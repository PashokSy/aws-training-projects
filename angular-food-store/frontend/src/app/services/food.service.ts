import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_food } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_food;
  }
}
