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

  getDish(id: number): Dish {
    // filter() 返回一个数组，由于每个 Dish 的 id 只有一个，所以返回第一个元素
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    // 同理， featured 为 true 的只有一个
    return DISHES.filter((dish) => (dish.featured))[0];
  }
}
