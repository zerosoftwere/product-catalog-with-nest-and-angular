import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { ElementModule } from '../element/element.module';

@NgModule({
  declarations: [
    ProductEditComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ElementModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
