import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  // 返回类型： Dish[]
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      // Simulate server time-delay with 2 seconds
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: number):Promise<Dish> {
    // filter() 返回一个数组，由于每个 Dish 的 id 只有一个，所以返回第一个元素
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish>{
    // 同理， featured 为 true 的只有一个
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]), 2000);
    });
  }
}
