import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PlantServerService } from './../services/plant-server.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //to be posted to server
  gardenName = '';
  plantName = '';
  zone = '';
  season = '';
  density = 0;

  //get garden size
  xGarden = 4;
  yGarden = 8;

  xGardenSize = [
    1,
    2,
    3,
    4
  ]

  yGardenSize = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ]

  seasons = [
    "spring",
    "summer",
    "fall",
    "spring, fall"
  ];

  densities = [
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    12,
    16,
    32
  ]

  zones = [
    "7a",
    "7b",
    "8a",
    "8b",
  ]

  constructor(private plantService: PlantServerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submitted")
  }

  //send to DB
  postPlant() {
    this.plantService.newPlant(this.plantName, this.gardenName, this.season, this.zone, this.density);
  }

}
