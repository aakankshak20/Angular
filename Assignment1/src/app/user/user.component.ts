import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 restaurants:any=[];

  constructor(private _resser:RestaurantService,private router:Router) {
    this.restaurants = this._resser.getRestaurants();
   }

  ngOnInit(): void {
  }

  showMenu(resMenu:any){
    this.router.navigate(['/order'],resMenu);
  }
}
