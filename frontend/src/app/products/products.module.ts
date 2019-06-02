import { ProductRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [ProductEditComponent, ProductListComponent, ProductAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
