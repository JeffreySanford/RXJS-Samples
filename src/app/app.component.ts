import { Component, OnInit } from '@angular/core';
import { FoodService, FOOD_LIST } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private TRANSFORMED_FOOD_LIST:Array<string>;
  title = 'Using pipes to in RxJS 6';
  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.sample_getFoods_uppercase();
  }

  sample_getFoods_uppercase() {
    let TRANSFORMED_FOOD_LIST = []
    this.foodService.getFoodsUppercase()

      .subscribe(food => {
        console.log(`value revieved: ${food}`);
        /* food element are transformed to uppercase in the service
        and are subscribed to here, now add the the elements to the 
        new TRANSFORED_FOOD_LIST array */

        TRANSFORMED_FOOD_LIST.push(food);
      })
    this.TRANSFORMED_FOOD_LIST = TRANSFORMED_FOOD_LIST;
  }
}
