import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementTableComponetComponent } from './advertisement-table-componet/advertisement-table-componet.component';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { EditProductComponetComponent } from './edit-product-componet/edit-product-componet.component';

const routes: Routes = [
  {path:'',redirectTo:'/advertisementform',pathMatch:'full'},
  {path:'advertisementtable',component:AdvertisementTableComponetComponent},
  {path:'advertisementform',component:AdvertisementFormComponentComponent},
  { path:'edit',component:EditProductComponetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

export const routingComponents=[AdvertisementTableComponetComponent,AdvertisementFormComponentComponent,EditProductComponetComponent];
