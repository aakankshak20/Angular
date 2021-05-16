import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AdvertisementServiceService {


   //dummy data

   advertises=[{
     title:'ABC',
     name:'ABC',
     topic:'Hardware',
     description:'About Hardware'
   },
   {
    title:'XYZ',
     name:'XYZ',
     topic:'Mobile',
     description:'About Mobile'
   },
   {
    title:'PQR',
    name:'PQR',
    topic:'Furniture',
    description:'About Furniture'
   }
  ]
  constructor() { }
  
add(adv:any){

  this.advertises.push(adv);
}

getadv(){
  return this.advertises;
}

deleteadv(adv:any){
  this.advertises.forEach(element=>{
    if(element.name === adv.name){
      this.advertises.splice(this.advertises.indexOf(element),1);
    }
  })
}

updateadv(title:any,name:any,topic:any,description:any){
  this.advertises.forEach(element=>{
    if(element.name===name){
        element.name=name;
        element.title=title;
        element.topic=topic;
        element.description=description;
    }
  })
}
}
