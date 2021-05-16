import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  menu:any=[];
  restaurants:any=[];
  item!:string;
  price!:number;
  show:boolean =false;
  name:any;

  constructor(private _resservice:RestaurantService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.paramMap.get('menu');
    this.menu=this._resservice.showMenu(this.menu);
     this.restaurants=this._resservice.getRestaurants();
  }


  editItem(item:any){
    this.item = item.item;
    this.price = item.price;
    this.show=!this.show;
  }

  update(newItem:any,oldItem:any){
    this._resservice.updateMenuItem(newItem,oldItem);
    this.show=!this.show;
  }

  assignMenu(value:any,menuName:any){
    this._resservice.assignMenu(value,menuName);
  }

  deleteItem(item:any){
    this._resservice.deleteItem(item);
  }

  add(item:any,name:any){
    this._resservice.addItem(item,name);
  }
}
