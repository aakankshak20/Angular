import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatGridListModule} from '@angular/material/grid-list';

const material=[
  MatGridListModule
]


@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
