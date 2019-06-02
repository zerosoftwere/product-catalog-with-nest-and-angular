import { Product } from './../models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() protected product: Product;
  @Output() protected submit: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submit.emit(form.value);
  }

}
