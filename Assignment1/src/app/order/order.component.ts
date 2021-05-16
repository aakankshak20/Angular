import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  menu:any=[];
  menuName:any;
  done:any;


  constructor(private route: ActivatedRoute,private _resser: RestaurantService) {
  

   }

  ngOnInit(): void {
    this.menuName=this.route.snapshot.paramMap.get('menu');
    this.menu=this._resser.showMenu(this.menuName);
  }

  orderFood(){
    this.done="Your order is placed!";
  }

}
