import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants =[
    {
      name:'ABC',
      location:'America',
      assignedMenu:'Menu 1'
    },
    {
      name:'XYZ',
      location:'London',
      assignedMenu:'Menu 2'
    },
    {
      name:'PQR',
      location:'NY',
      assignedMenu:'Menu 3'
    }
    
  ];

  Menus=['Menu 1','Menu 2','Menu 3'];
  Menu=[
     {
       name:'Menu 1',
       items:[
         {
           item:'pizza',
           price:200
         },{
           item:'burger',
           price:300
         }
       ]
     },
     {
      name:'Menu 2',
      items:[
        {
          item:'Hotdog',
          price:200
        },
        {
          item:'Fries',
          price:80
        }
      ]
    },
    {
      name:'Menu 3',
      items:[
        {
          item:'nachos',
          price:100
        },
        {
          item:'cold drink',
          price:40
        }
      ]
    }
  ]
  constructor() { }

  getMenus() {
    return this.Menus;
  }
  getMenu(){
    return this.Menu;
  }

  addItem(item:any,name:any){
    this.Menu.forEach(element => {
      if(element.name === name){
        element.items.push(item);
      }
    });
  }

  deleteItem(item:any){
    this.Menu.forEach(element =>{
      element.items.forEach(fooditem =>{
        if(fooditem.item === item.item)
        {
          element.items.splice(element.items.indexOf(fooditem),1);
        }
      });
    });
  }

  editItem(menu:any,item:any){
    this.Menu.forEach(element =>{
      element.items.forEach(fooditem =>{
        if(fooditem.item === item)
        {
          element.items.splice(element.items.indexOf(item),1);
        }
      });
    });
  }

  updateMenuItem(item:any,name:any){
    this.Menu.forEach(element =>{
      element.items.forEach(fooditem =>{
        if(fooditem.item === item)
        {
          fooditem.item = item.item;
          fooditem.price = item.price;
        }
      });
    });
  }

  showMenu(name:any){
    let display;
    this.Menu.forEach(element =>{
      if(element.name === name){
        display=(element.items);
      }
    });
    return display
  }

  assignMenu(res:any,menuName:any){
    this.restaurants.forEach(element =>{
      if(element.name === menuName){
        element.assignedMenu = menuName;
      }
    });
  }
 
  getRestaurants(){
    return this.restaurants;
  }
  addRestaurant(res:any){
    this.restaurants.push(res);
  }

  deleteRestaurant(res:any){
    this.restaurants.forEach(element =>{
      if(element.name === res.name){
        this.restaurants.splice(this.restaurants.indexOf(element),1);
      }
    });
  }

  updateRestaurant(res:any,name:any){
    this.restaurants.forEach(element =>{
      if(element.name === name){
        element.name = res.name;
        element.location = res.location;
      }
    });
  }

  assignMenuRestaurant(menu:any,resName:any){
    this.restaurants.forEach(element =>{
      if(element.name === resName){
        element.assignedMenu=menu;
      }
    });
  }
}
