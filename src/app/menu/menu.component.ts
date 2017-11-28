import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  errMess: string;

  // BaseURL is injected from app.module.ts, which is in providers: {provide: 'BaseURL', useValue: baseURL}]
  constructor(private dishService: DishService,
  @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    // 第一个 dishes 是 Promise resolve() 返回的结果
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess );
  }

}
