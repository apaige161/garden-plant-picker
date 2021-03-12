import { Component, Input, OnInit } from '@angular/core';
import { FullPlant } from './../full-plant';
import { PlantServerService } from './../services/plant-server.service'



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /**
   * App allows user to: 
   *  select the saize of their raised bed
   *  stage plants to put into a raised bed
   *  save up to 4 arrays(columns) into a single saved garden bed
   * 
   * TODO:
   *  send savePlants to the api to store data
   * 
   *  get saved data from api
   * 
   *  update data by savePlants:id
   * 
   *  delete data by savePlants:id
   * 
   * 
   */

  constructor(private plantService: PlantServerService) { }

  ngOnInit(): void {
  }

  @Input()
  title = 'my-garden';

  //max number of square feet
  yGardenMax: number = 4;
  xGardenMax: number = 8;

  //array to hold the plant objects
  fullPlant: FullPlant[] = [
    {
      plant: 'carrot',
      season: 'spring, fall',
      perFoot: 16,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cabbage',
      season: 'summer',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cucumber',
      season: 'spring, fall',
      perFoot: .25,
      zone: '7b',
      col: 0
    },
    {
      plant: 'hot pepper',
      season: 'summer',
      perFoot: .5,
      zone: '7b',
      col: 0
    },
    {
      plant: 'mild pepper',
      season: 'summer',
      perFoot: .5,
      zone: '7b',
      col: 0
    },
    {
      plant: 'garlic',
      season: 'spring, fall',
      perFoot: 4,
      zone: '7b',
      col: 0
    },
    {
      plant: 'basil',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'lettuce',
      season: 'spring, fall',
      perFoot: 16,
      zone: '7b',
      col: 0
    },
  ];

  //arrays where plants can be stored
  
  //staging area
  garden: FullPlant[] = [];

  firstCol: FullPlant[] = [];

  secondCol: FullPlant[] = [];

  thirdCol: FullPlant[] = [];

  fourthCol: FullPlant[] = [];

  fullGarden: FullPlant[] = [];


  /**entire full garden and save it**/
  
  gardenName:string = "";

  //create new arrays to store data to send to backend
  saveFirstCol: FullPlant[];
  saveSecondCol: FullPlant[];
  saveThirdCol: FullPlant[];
  saveFourthCol: FullPlant[];

  //holds the value of each column of plants
  savePlants: [FullPlant[]];
  /**
   * holds these arrays
   * 
   * saveFirstCol
   * saveFirstCol
   * saveThirdCol
   * saveFourthCol
   */

  storePlantArrays(){
    this.savePlants = 
      [this.saveFirstCol = this.firstCol],
      [this.saveSecondCol = this.secondCol],
      [this.saveThirdCol = this.thirdCol],
      [this.saveFourthCol = this.fourthCol]
  }
    
  //save name from user input && store values
  /*** Add validation to not allow saving unnamed gardens **/
  saveName(val){
    this.gardenName = val;

    //store values
    this.storePlantArrays();
  }





  /********************************
  
    add a plant to garden when clicked on

    the button in the html gets the index of the item and sends it to be added as an index number
      from plants
  
  *******************************/

  

  /*stage plants here*/
  addToGarden(plantToAdd: number) {
    
    //only allow max 8
    if(this.garden.length <= (this.xGardenMax -1)) {
      this.garden.push(this.fullPlant[plantToAdd]);
    }
  }

  //remove item by index
  removeFromGarden(removePlant: number) {
    this.garden.splice(removePlant, 1);
  }

  //reset garden array
  clearGarden() {
    this.garden = [];
  }



  /** clear columns and items in columns **/
  removeFromFirstColumn(removePlant: number) {
    this.firstCol.splice(removePlant, 1);
  }

  clearColumn() {
    this.firstCol = [];
  }

  clearSecondColumn() {
    this.secondCol = [];
  }

  clearThirdColumn() {
    this.thirdCol = [];
  }

  clearFourthColumn() {
    this.fourthCol = [];
  }


  /*** creates a new column in the garden bed to be saved ***/
  createNewGardenCol() {
    if(this.firstCol.length == 0) {
      this.firstCol = this.garden;
    }
    else if (this.secondCol.length == 0 && this.xGardenMax >= 2){
      this.secondCol = this.garden;
    }
    else if (this.thirdCol.length == 0 && this.xGardenMax >= 3){
      this.thirdCol = this.garden;
    }
    else if (this.fourthCol.length == 0 && this.xGardenMax >= 4){
      this.fourthCol = this.garden;
    } else {
      console.log("something went wrong!");
    }
    
    this.clearGarden();
  }

  /*** calculates when to stop allowing user to ad plants in staging area ***/
  gardenfull() {
    if(this.garden.length == this.xGardenMax){
      return true;
    } else {
      return false;
    }
  }


  /*
  save information to the DB
  */
  postToDb(){

    let plantName = '';
    let season = '';
    let density = 0;
    let zone = ''
    let col = 0;

    if(this.saveFirstCol) {
      this.saveFirstCol.forEach(item => {
        item.plant = plantName;
        item.season = season;
        item.perFoot = density;
        item.zone = zone;
        col = 0

        this.plantService.newPlant(
          plantName,
          this.gardenName,
          season,
          zone,
          density,
          this.xGardenMax,
          this.yGardenMax,
          col
        )
      });
      console.log("posted first col");
    }
    if(this.saveSecondCol) {
      this.saveSecondCol.forEach(item => {
        item.plant = plantName;
        item.season = season;
        item.perFoot = density;
        item.zone = zone;
        col = 1

        this.plantService.newPlant(
          plantName,
          this.gardenName,
          season,
          zone,
          density,
          this.xGardenMax,
          this.yGardenMax,
          col
        )
      });
      console.log("posted second col");
    } 
    if(this.saveThirdCol) {
      this.saveThirdCol.forEach(item => {
        item.plant = plantName;
        item.season = season;
        item.perFoot = density;
        item.zone = zone;
        col = 2

        this.plantService.newPlant(
          plantName,
          this.gardenName,
          season,
          zone,
          density,
          this.xGardenMax,
          this.yGardenMax,
          col
        )
      });
      console.log("posted third col");
    }
    if(this.saveFourthCol) {
      this.saveFourthCol.forEach(item => {
        item.plant = plantName;
        item.season = season;
        item.perFoot = density;
        item.zone = zone;
        col = 3

        this.plantService.newPlant(
          plantName,
          this.gardenName,
          season,
          zone,
          density,
          this.xGardenMax,
          this.yGardenMax,
          col
        )
      });
      console.log("posted fourth col");
    }
  }

  //send to DB
  /*
  postPlant() {

    this.plantService.newPlant(
      
      this.plant, 
      this.gardenName, 
      this.season, 
      this.zone, 
      this.density, 
      this.xGardenMax, 
      this.yGardenMax);
  }
*/


}
