import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  name!:string;
  location:any;
  id!:number;
  show=false;
  restaurants:any=[];

  constructor(private _resservice: RestaurantService) {
    this.restaurants=_resservice.getRestaurants();
   }

  ngOnInit(): void {
  }

  addRes(res:any){
    this._resservice.addRestaurant(res);
  }
  deleteRes(res:any){
    this._resservice.deleteRestaurant(res);
  }

  editRes(res:any){
  this.show=!this.show;
  this.name= res.name;
  this.location=res.location;
  }

  updateRes(res:any,name:any){
    this._resservice.updateRestaurant(res,name);
    this.show=!this.show;
  }
}
