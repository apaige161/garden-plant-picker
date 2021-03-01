import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
//forms
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PlantServerService } from './../services/plant-server.service'


import { SinglePlant } from './../single-plant';

@Component({
  selector: 'app-new-garden',
  templateUrl: './new-garden.component.html',
  styleUrls: ['./new-garden.component.css']
})
export class NewGardenComponent implements OnInit {

  plants: SinglePlant[];

  readonly url = 'http://localhost:3000/gardens';

  tempGardenName = '';
  zone = '7b';

  

  constructor(private plantService: PlantServerService, private http: HttpClient, private fb: FormBuilder) {

  }
/********************* refresh list of plants ******************************************/
  allPlantsinit() {
    this.plantService.getPlants()
      .subscribe(data => this.plants = data);
  }

  /****************START new plant validation*******************/

  //needs to be refactored -noted on github

  
 

  AddGardenForm = new FormGroup({
    tempGardenName: new FormControl(''),
    xGarden: new FormControl(''),
    yGarden: new FormControl(''),
    gardenZone: new FormControl(''),
  }) 

  AddPlantForm = new FormGroup({
    addPlantName: new FormControl('', Validators.required),
    newPlantSeason: new FormControl('', Validators.required),
    newPlantdensity: new FormControl('', Validators.required),
    

  }) 

  AddOptionsForm = new FormGroup({
    
  })

  bindGardenName(name) {
    this.tempGardenName = name;
  }

  bindPlantZone(gardenzone) {
    this.zone = gardenzone;
  }

  //valid or not
  get plantValidation() {
    return this.AddPlantForm;
  }
  /****************END new plant validation*******************/




  /****************START post created plant*******************/

  /**
   * 
   * create conditional statements to only allow new plants to be created when there is 
   * room in the garden
   * 
   * size is based on the user choice
   * 
   */

  xGarden = 1;
  yGarden = 1;
  totalGardenArea = 1;

  calculateGardenArea(x: number, y: number){
    this.totalGardenArea = x * y;
  }



  postNewPlant(newPlant, garden, plantingSeason, plantZone, perFoot) {

    garden = this.tempGardenName;
    plantZone = this.zone;


    //return as a promise
    //this.plantService.newPlant(newPlant, garden, plantingSeason, plantZone, perFoot);

    //console.log(this.AddPlantForm);


  }

  /****************End post created plant*******************/





  ngOnInit(): void {
  }

}

