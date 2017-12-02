import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

import { Observable } from 'rxjs/Observable';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService ) {

    }

  // 返回类型： Dish[]
  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id));
  }
}
