import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-link',
  templateUrl: './restaurant-link.component.html',
  styleUrls: ['./restaurant-link.component.css']
})
export class RestaurantLinkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getUser(){
   this.router.navigate(['/user']);

 }

 getAdmin(){
   this.router.navigate(['/admin']);
 }
}
