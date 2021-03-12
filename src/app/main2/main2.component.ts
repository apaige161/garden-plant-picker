import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SinglePlant } from '../single-plant';
import { FullPlant } from './../full-plant';
import { PlantServerService } from './../services/plant-server.service'



@Component({
  selector: 'app-main',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

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

  constructor(private plantService: PlantServerService, private http: HttpClient) { }

  @Input()
  title = 'my-garden';

  //max number of square feet
  yGardenMax: number = 4;
  xGardenMax: number = 8;

  //array to hold the plant objects
  //TODO: move these objects to the api 
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
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'hot pepper',
      season: 'summer',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'mild pepper',
      season: 'summer',
      perFoot: 1,
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
  
  gardenName:string = "";


  //holds the value of each column of plants
  savePlants: [FullPlant[]];

  /********************************
  
    add a plant to garden when clicked on

    the button in the html gets the index of the item and sends it to be added as an index number
      from plants
  
  *******************************/

  
  //save name from user input && store values
  /*** Add validation to not allow saving unnamed gardens **/
  saveName(val){
    this.gardenName = val;
  }

  /*add plants here*/
  addToGarden(plantToAdd: number) {

    //create a new object to push 
    let plant = Object.create(this.fullPlant);
    plant.plant = this.fullPlant[plantToAdd].plant;
    plant.season = this.fullPlant[plantToAdd].season;
    plant.perFoot = this.fullPlant[plantToAdd].perFoot;
    plant.zone = this.fullPlant[plantToAdd].plant;
    plant.col = 0;

    //push plant to first row
    if(this.firstCol.length <= (this.yGardenMax -1)) {
      this.firstCol.push(plant);
    }

    //push plant to second row
    else if(this.firstCol.length >= (this.yGardenMax -1) && this.secondCol.length <= (this.yGardenMax -1)) {
      this.secondCol.push(plant);
    }

    //push plant to third row
    else if(this.secondCol.length >= (this.yGardenMax -1) && this.thirdCol.length <= (this.yGardenMax -1)) {
      this.thirdCol.push(plant);
    }

    //push plant to fourth row
    else if(this.thirdCol.length >= (this.yGardenMax -1) && this.fourthCol.length <= (this.yGardenMax -1)) {
      this.fourthCol.push(plant);
    }
  }

  correctColumns(){
    this.firstCol.forEach(item => {
      item.col = 1;
    });

    this.secondCol.forEach(item => {
      item.col = 2;
    });

    this.thirdCol.forEach(item => {
      item.col = 3;
    });

    this.fourthCol.forEach(item => {
      item.col = 4;
    });
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


 

  /*** calculates when to stop allowing user to ad plants in staging area ***/
  gardenfull() {
    if(this.garden.length == this.xGardenMax){
      return true;
    } else {
      return false;
    }
  }


  
  //save information to the DB
  
  postToDb(){

    var sendToDb = this.firstCol.concat(this.secondCol, this.thirdCol, this.fourthCol)

    sendToDb.forEach(item => {
      this.plantService.newPlant( item.plant, this.gardenName, item.season, item.zone, item.perFoot, this.xGardenMax, this.yGardenMax, item.col)
    })
    
  }
  

  /**
   * 
   * get plants
   * 
  */

   plants: SinglePlant[];

   readonly url = 'http://localhost:3000/gardens';

   /****************START sort and filter*******************/

    Garden = '';
    SearchGarden = '';

    SortByParam = 'garden';
    SortDirection = 'asc'

    /*
    //filter button logic
    onGardenFilter() {
      this.SearchGarden = this.Garden;
    }
    */

    onGardenFilterClear() {
      this.SearchGarden = '';
      this.Garden = '';
    }

    //sort direction toggle
    onSortDirection() {
      if (this.SortDirection === 'desc') {
        this.SortDirection = 'asc';
      } else {
        this.SortDirection = 'desc';
      }
    }

    /****************END sort and filter*******************/

   allPlantsinit() {
    this.plantService.getPlants()
      .subscribe(data => this.plants = data);
  }

  deletePlant(id:string) {
    this.plantService.deleteOne(id).subscribe( res => {
      //refresh list
      this.allPlantsinit();
    })
  }

  deleteAllPlants(){

    console.log("delete all attempt start");

    //loop over each id and send the request
    this.plants.forEach(data => {
      return this.http.delete(this.url+'/'+data._id).subscribe(res => {
        console.log(data._id+" deleted")
      })
    })
    //refresh list
    this.allPlantsinit();
  }

  ngOnInit() {
    this.allPlantsinit();
  }

}
