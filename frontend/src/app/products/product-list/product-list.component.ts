import { Product } from './../models/product.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() showAddButton: EventEmitter<{show: boolean, count: number}> = new EventEmitter();

  protected products$: Observable<Product[]>;

  constructor(private readonly productsService: ProductsService) { }

  async ngOnInit() {
    this.products$ = this.productsService.getAll();
  }

}
