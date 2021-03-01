import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
//forms
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PlantServerService } from './../services/plant-server.service'
import { SinglePlant } from './../single-plant';

@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.css']
})
export class SortAndFilterComponent implements OnInit {

  @Input() uniqueGardenName;
  

  plants: SinglePlant[];

  readonly url = 'http://localhost:3000/gardens';

  //filter parameter
  Garden = '';
  /*** get 'tempGardenName' from new-garden component */

  //SearchGarden = '';

  //sort params, default values
  SortByParam = 'garden';
  SortDirection = 'asc'

  constructor(private plantService: PlantServerService, private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
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

  onGardenFilterClear() {
    //this.SearchGarden = '';
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

}
