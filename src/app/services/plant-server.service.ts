import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SinglePlant } from './../single-plant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantServerService {

  plants: Observable<SinglePlant[]>;

  //inject http 
  url = 'http://localhost:3000/gardens';
  //data to be posted
  postData = {
    plant: "default"
  }

  deleteData = {
    _id: "",
    plant: "",

  }

  constructor(private http: HttpClient) {}

  //get all plants
  getPlants() {
    return this.http.get<SinglePlant[]>(this.url);
  }


  newPlant(plantName: string) {
    this.postData.plant = plantName;
    //return as a promise
    this.http.post(this.url, this.postData)
      .subscribe(data => {
      console.log(data);
    })
  }

  deleteOne(id: string) {
    return this.http.delete(this.url+'/'+id)
  }

  



}



