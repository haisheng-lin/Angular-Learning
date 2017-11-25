import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish; // 声明数据类型，由于初始化时没有赋值，所以一开始页面不显示 md-card 部分

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // 第一个 dishes 是 Promise resolve() 返回的结果
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
