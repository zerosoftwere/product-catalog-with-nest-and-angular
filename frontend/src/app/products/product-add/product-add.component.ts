import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
        private readonly productService: ProductsService, 
        private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(product) {
    this.productService.add(product);
    this.router.navigate(['']);
  }

}
