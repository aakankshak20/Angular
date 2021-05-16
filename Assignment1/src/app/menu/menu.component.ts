import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 menus:any=[];
  constructor(private router:Router,private _resservice:RestaurantService) { 
    this.menus=this._resservice.getMenus();
  }

  ngOnInit(): void {
  }
 editMenu(menu:any){
   this.router.navigate(['edit',menu]);
 }
}
