import { Component } from '@angular/core';
import { faSeedling, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-garden';

  //display list of veggies
  plants: string[] = [
    "carrot",
    "cabbage",
    "cucumber",
    "hot pepper",
    "mild pepper",
    "garlic",
    "basil",
    "lettuce"
  ]

  garden: string[] = []

  /********************************
  
    add a plant to garden when clicked on

    the button in the html gets the index of the item and sends it to be added as an index number
      from plants
  
  *******************************/
  addToGarden(plantToAdd: number) {
    this.garden.push(this.plants[plantToAdd]);
  }

  removeFromGarden(removePlant: number) {
    this.garden.splice(removePlant, 1);
  }

  clearGarden() {
    this.garden = [];
  }

  
  //initialize an array with 9 places and set each item as 'empty'
  itemArray: string[] = new Array(9).fill('empty');
}
