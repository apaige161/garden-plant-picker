import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
//forms
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';


import { SinglePlant } from './../single-plant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlantServerService } from './../services/plant-server.service'

@Component({
  selector: 'app-plants-api',
  templateUrl: './plants-api.component.html',
  styleUrls: ['./plants-api.component.css']
})
export class PlantsApiComponent implements OnInit {

  plants: SinglePlant[];

  readonly url = 'http://localhost:3000/gardens';

  /**
   * Add new plant validation
   */

  AddPlantForm = new FormGroup({
    addPlantName: new FormControl('', Validators.required),
    addGardenName: new FormControl('', Validators.required),
  }) 

  //valid or not
  get plantValidation() {
    return this.AddPlantForm;
  }

  
  constructor(private plantService: PlantServerService, private http: HttpClient, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.allPlantsinit();
  }

  initalizeForm(): void {
    this.AddPlantForm = this.fb.group({
      //add key value pairs
      addPlantName: '',
      addGardenName: ''
    })
  }

  postNewPlant(newPlant, garden) {
    //return as a promise
    this.plantService.newPlant(newPlant, garden);

    console.log(this.AddPlantForm);

    //refresh list
    this.allPlantsinit();
  }

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

  


  

}
