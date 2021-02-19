import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SinglePlant } from './../single-plant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlantServerService } from './../services/plant-server.service'

@Component({
  selector: 'app-plants-from-server',
  templateUrl: './plants-from-server.component.html',
  styleUrls: ['./plants-from-server.component.css']
})
export class PlantsFromServerComponent implements OnInit {

  //inject http 

  readonly ROOT_URL = 'http://localhost:3000';

  //used in the single plant on server side
  plants:  Observable<any>;
  newPlant: Observable<any>;

  plantId: string;
  deletedPlant: Observable<any>;

  constructor(private http: HttpClient) {}


  

  /**************************************************************
   * 
   * These Requests get/post a single plant from server and DB
   * 
   ***************************************************************/


   
  //GET request to the api
  getPlants() {
    //specify get type
    this.plants = this.http.get<SinglePlant[]>(this.ROOT_URL + '/gardens');

  }

  //POST request
  createPlant() {
    //change data
    const data = {
      plant: "bannana"
    }

    //post data to server
    this.newPlant = this.http.post<SinglePlant>(this.ROOT_URL + '/gardens', data).pipe(map(SinglePlant => SinglePlant.plant))
  }

  //DELETE request
  //delete by ID
  deletePlant(id: string){
    this.http.delete(this.ROOT_URL + '/gardens/' + id);
    console.log("delete attempted");
    

    this.http.delete("http://localhost:3000/gardens/602d7c967165a9ad278c15ed");
  }



  /**************************************************************
   * 
   * These Requests get/post a single plant from server and DB
   * 
   ***************************************************************/


  
  ngOnInit(): void {
  }

}
