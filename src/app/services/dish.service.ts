import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  // 返回类型： Dish[]
  getDishes(): Dish[] {
    return DISHES;
  }
}
