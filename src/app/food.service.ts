// Mock data can be places here to be removed at earliest conviencence
export const FOOD_LIST = [
  "apple", "bannanas", "cherries", "eggs"
]

import { Injectable } from '@angular/core';

//RxJS 5
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operators/map';

// RxJS 6
import { Observable, from, pipe} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodsUppercase(): Observable<string> {
    return from(FOOD_LIST)
      .pipe(
        // pipe allows for chainable methods -- pipeable or lettable 
        // commands here comma-seperated

        map( food => food.toUpperCase() )
      )
  }
}
