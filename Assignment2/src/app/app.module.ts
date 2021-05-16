import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { HttpClientModule} from '@angular/common/http';
import { AdvertisementTableComponetComponent } from './advertisement-table-componet/advertisement-table-componet.component';
import { EditProductComponetComponent } from './edit-product-componet/edit-product-componet.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditProductComponetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
