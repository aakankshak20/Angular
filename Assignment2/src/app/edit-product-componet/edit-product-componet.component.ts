import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceService } from '../advertisement-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-componet',
  templateUrl: './edit-product-componet.component.html',
  styleUrls: ['./edit-product-componet.component.css']
})

export class EditProductComponetComponent implements OnInit {

  name='';
  title='';
  topic='';
  description='';
  adv:any=[];
  constructor(private _adv:AdvertisementServiceService,private router:Router) { 
    this.adv=_adv.getadv();
  }

  ngOnInit(): void {
  }

  updateAdv(adv:any,name:any,topic:any,des:any){
    this._adv.updateadv(adv,name,topic,des);
  }
  gethome(){
    this.router.navigate(['/']);
  }
}
