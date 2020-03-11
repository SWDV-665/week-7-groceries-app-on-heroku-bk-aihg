import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-grocery',
  templateUrl: 'grocery.html'
})
export class GroceryPage {

  groceryList: Array <any> = [];
  constructor(public navCtrl: NavController) {

    this.groceryList = [{
      "name": "Milk",
      "id": 1,
      "quantity": 4
    },{
      "name": "Banana",
      "id": 2,
      "quantity": 8
    }]

  }

}
