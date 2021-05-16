import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceService } from '../advertisement-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement-table-componet',
  templateUrl: './advertisement-table-componet.component.html',
  styleUrls: ['./advertisement-table-componet.component.css']
})
export class AdvertisementTableComponetComponent implements OnInit {

  Adv:any=[];
  constructor(private _advser:AdvertisementServiceService,private router:Router) {
    this.Adv=_advser.getadv();
   }

  ngOnInit(): void {
  }


  deleteadv(adv:any){
    this._advser.deleteadv(adv);
  }

  editadv(){
    this.router.navigate(['/edit']);
  }
}
