import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChange, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
//forms
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PlantServerService } from './../services/plant-server.service'
import { SinglePlant } from './../single-plant';

@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.css']
})
export class SortAndFilterComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() uniqueGardenName;

  //retrieve x and y from DB???
  xGarden = 0;
  yGarden = 0;
  maxPlants = 32;
  area = 0;

  plants: SinglePlant[];

  readonly url = 'http://localhost:3000/gardens';

  
  /*** get 'tempGardenName' from new-garden component */

  //SearchGarden = '';

  //sort params, default values
  SortByParam = 'garden';
  SortDirection = 'asc'

  constructor(private plantService: PlantServerService, private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.allPlantsinit();
    //this.getSize();
  }

  ngOnChanges() {
    
  }

  ngAfterViewInit() {
    //this.getSize();
  }

  //refresh button
  allPlantsinit() {
    this.plantService.getPlants()
      .subscribe(data => this.plants = data);

    console.log(this.plants);

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

  //sort direction toggle
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

  /**
   * define grid
   * 
   * ngOnChanges?????
   * 
   */

   //only give the latest posted size
   //need to get the current
  getSize() {
    this.plants.map(garden => {
      this.xGarden = garden.xGarden;
      this.yGarden = garden.yGarden
    });
  }

  calculateArea(x, y){
    this.area = x*y
    this.maxPlants = this.area;
  }

}
