import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantLinkComponent } from './restaurant-link/restaurant-link.component';
import { UserComponent } from './user/user.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path :'',redirectTo:'/restaurant-link',pathMatch:'full'},
  { path:'admin',component:AdminComponent},
  { path:'menu',component:MenuComponent},
  { path:'restaurat',component:RestaurantComponent},
  { path:'restaurant-link',component:RestaurantLinkComponent},
  { path:'edit/:menu',component:EditMenuComponent},
  { path:'user' ,component:UserComponent},
  { path:'order',component:OrderComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[AdminComponent, MenuComponent,UserComponent,RestaurantLinkComponent,
                                 OrderComponent,EditMenuComponent,PageNotFoundComponent,RestaurantComponent,RestaurantLinkComponent]
