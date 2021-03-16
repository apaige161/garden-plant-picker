import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { SinglePlant } from '../single-plant';
import { FullPlant } from './../full-plant';
import { PlantServerService } from './../services/plant-server.service';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';



@Component({
  selector: 'app-main',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
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
  xGardenMax: number = 2;
  yGardenMax: number = 2;

  xGardenDisable: boolean = false;
  
  yGardenDisable: boolean = false;


  

  /*** Progress variables ***/
  spaceAvailable = 0;
  plantsInProposedGarden = 0;
  progress = 0;

  //100% progress
  //full: boolean;

  factor = 0;
  //disabled = true
  disableAddPlants = true;

  //used for error handling
  test = 0;



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
      plant: 'rosemary',
      season: 'spring',
      perFoot: 1,
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
      plant: 'bell pepper',
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
      perFoot: 2,
      zone: '7b',
      col: 0
    },
    {
      plant: 'leaf lettuce',
      season: 'spring, fall',
      perFoot: 16,
      zone: '7b',
      col: 0
    },
    {
      plant: 'head lettuce',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'arugula',
      season: 'spring, fall',
      perFoot: 16,
      zone: '7b',
      col: 0
    },
    {
      plant: 'kale',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'carrot',
      season: 'spring, fall',
      perFoot: 16,
      zone: '7b',
      col: 0
    },
    {
      plant: 'pole beans',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'spinach',
      season: 'spring, fall',
      perFoot: 9,
      zone: '7b',
      col: 0
    },
    {
      plant: 'parsnips',
      season: 'spring, fall',
      perFoot: 9,
      zone: '7b',
      col: 0
    },
    {
      plant: 'leeks',
      season: 'spring, fall',
      perFoot: 6,
      zone: '7b',
      col: 0
    },
    {
      plant: 'broccoli',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'cauliflower',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'bok choy',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'radishes',
      season: 'spring, fall',
      perFoot: 16,
      zone: '7b',
      col: 0
    },
    {
      plant: 'beets',
      season: 'spring, fall',
      perFoot: 9,
      zone: '7b',
      col: 0
    },
    {
      plant: 'peas',
      season: 'spring, fall',
      perFoot: 8,
      zone: '7b',
      col: 0
    },
    {
      plant: 'celery',
      season: 'spring, fall',
      perFoot: 1,
      zone: '7b',
      col: 0
    },
    {
      plant: 'parsley',
      season: 'spring, fall',
      perFoot: 2,
      zone: '7b',
      col: 0
    },
    {
      plant: 'swiss chard',
      season: 'spring, fall',
      perFoot: 2,
      zone: '7b',
      col: 0
    },

  ];

  //arrays where plants can be stored
  
  //staging area

  firstCol: FullPlant[] = [];

  secondCol: FullPlant[] = [];

  thirdCol: FullPlant[] = [];

  fourthCol: FullPlant[] = [];
  
  gardenName:string = "";

  garden = [this.firstCol, this.secondCol, this.thirdCol, this.fourthCol];


  //holds the value of each column of plants
  savePlants: [FullPlant[]];

  /********************************
  
    add a plant to garden when clicked on

    the button in the html gets the index of the item and sends it to be added as an index number
      from plants
  
  *******************************/

  
  //save name from user input && store values
  /*** Add validation to not allow saving unnamed gardens **/

  // true = disabled
  saveDisable: boolean = true;

  
  canSave(){
    if((this.progress > 1) && (this.gardenName.length > 2)){
      console.log("progress above 1 --disabled")
      console.log("name is longer than 2 char --disabled")
      this.saveDisable = false;

      
      //only allow if the garden name isnt already taken
      this.singleGardenNames.forEach(name => {
        if(this.gardenName != name){
          this.saveDisable = false;
          console.log("no current gardens with the same name")
        } else { 
          this.saveDisable = true;
          console.log("a duplicate name was discovered, try a new name")
        }
        
      });

    }
  }
  







  /****************************
   * 
   * progress bar logic
   * 
   ***************************/
  totalPossiblePlants(){
    this.spaceAvailable = this.xGardenMax * this.yGardenMax
  }

  

  addToProgressBar() {
    this.progress = this.progress + (this.factor);
  }

  resetProgress(){
    this.progress = 0;
    this.disableAddPlants = false;
    this.firstCol = [];
    this.secondCol = [];
    this.thirdCol = [];
    this.fourthCol = [];

    //enable booleans
    this.xGardenDisable = false;
    this.yGardenDisable = false;
  }

  /*
  subtractFromSpaceAvailable(num: number) {
    this.spaceAvailable = (this.spaceAvailable - this.factor) * num;
    //this.totalPossiblePlants();
  }
  */

  
  calculateProgress() {

    //cannot add plants
    this.disableAddPlants = true;

    //each item will ake up this much room
    this.factor = 100 / this.spaceAvailable;

    //error handling
    if((this.test = this.factor * this.spaceAvailable) != 100) {
      console.log("There was an error in calculating the progress of proposed garden")
    }
      
    if(this.progress < (100)){

      //enable adding plants
      this.disableAddPlants = false;

      //add in the last plant to total, check if that plant makes it 100% full
      if((this.progress + this.factor) >= 100) {
        this.disableAddPlants = true;
        
      }
    }

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

    if( (this.xGardenMax * this.yGardenMax) 
      > (this.firstCol.length 
          + this.secondCol.length 
          + this.thirdCol.length 
          + this.fourthCol.length) 
    ) {
      //push plant to first row
      if(this.firstCol.length <= (this.yGardenMax -1)) {
        this.firstCol.push(plant);
      }

      //push plant to second row
      else if( (this.firstCol.length >= (this.yGardenMax -1)) && (this.secondCol.length <= (this.yGardenMax -1)) ) {
        this.secondCol.push(plant);
      }

      //push plant to third row
      else if( (this.secondCol.length >= (this.yGardenMax -1)) && (this.thirdCol.length <= (this.yGardenMax -1))) {
        this.thirdCol.push(plant);
      }

      //push plant to fourth row
      else if( (this.thirdCol.length >= (this.yGardenMax -1)) && (this.fourthCol.length <= (this.yGardenMax -1))) {
        this.fourthCol.push(plant);
      }
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

  //drop event, for drag and drop
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }


  //remove item by index
  removeFromGarden(removePlant: number) {
    this.garden.splice(removePlant, 1);
  }

  disableGardenMax(){
    //disable booleans
    this.xGardenDisable = true;
    this.yGardenDisable = true;

  }

  //reset garden array
  clearGarden() {
    
    this.garden = [];
    

  }



  /** clear columns and items in columns **/
  removeFromFirstColumn(removePlant: number) {
    this.firstCol.splice(removePlant, 1);
  }

  clearColumn(column) {
    //remove this many plants from progress
    this.progress -= (column.length * this.factor);
    //reset col
    this.firstCol = [];

    //if there is room in the garden allow adding of plants
    if(this.progress < 100) {
      this.disableAddPlants = false;
    }
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

    Garden = 'aaa';
    SearchGarden = '';
    gardenNames = [];
    singleGardenNames = [];

    SortByParam = 'garden';
    SortDirection = 'asc'

    


    
    //filter button logic
    onGardenFilter() {
      this.SearchGarden = this.Garden;
    }
    

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

  //get each garden name
  getEachGardenNameOnce(){

    //push all garden names to array
    this.plants.forEach(item => {
      this.gardenNames.push(item.garden)
    });
    console.log('added all garden names')
  }

  //remove duplicates
  removeDuplicates(arr){

    //convert to a set which only allows unique values
    const uniqueSet = new Set(arr);

    //convert back to an array
    this.singleGardenNames = [...uniqueSet];
    console.log('removed duplicate garden names')

  }

  ngOnInit() {
    this.allPlantsinit();
    
    this.totalPossiblePlants();
    this.calculateProgress();
    this.getEachGardenNameOnce();
    this.removeDuplicates(this.gardenNames);
    
  }



  
}
