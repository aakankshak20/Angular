import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from '../advertisement-service.service';

@Component({
  selector: 'app-advertisement-form-component',
  templateUrl: './advertisement-form-component.component.html',
  styleUrls: ['./advertisement-form-component.component.css']
})
export class AdvertisementFormComponentComponent implements OnInit {

  topics=['Furniture','Hardware','Mobile'];
  topicHasError=true;
  submit= false;
  errormsg='';
  arr:any;
  userModel = new User('ABC','Aakanksha','Mobile','');
  
  constructor(private _advertise:AdvertisementServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  
 validateTopic(value:string){
   if(value==='default'){
     this.topicHasError=true;
   }else{
     this.topicHasError=false;
   }
 }

 onSubmit(){
   this.submit=true;
  this.arr= this._advertise.add(this.userModel);
  // this._advertise.add(this.arr);
   console.log('success');
 }
 
 getadv(){
  this.router.navigate(['/advertisementtable']);
 }
 
 
}
