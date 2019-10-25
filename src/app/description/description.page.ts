import { Component, OnInit } from '@angular/core';
import { FoodDescriptionService } from '../services/food-description.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  public prato: any;

  constructor(public food: FoodDescriptionService) {
    this.prato = this.food.getDados('prato');
  }

  ngOnInit() {
  }

}
