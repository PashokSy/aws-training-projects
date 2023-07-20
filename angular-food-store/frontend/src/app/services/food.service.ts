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

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getFoodByID(foodId: string): Food {
    return this.getAll().find((food) => food.id == foodId) ?? new Food();
  }
}
