import { Product } from '../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  protected product$: Observable<Product>;

  constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly productsService: ProductsService) { }

  ngOnInit() {
    this.product$ = this.route.paramMap
        .pipe(
          switchMap(params =>
            this.productsService.get(+params.get('id'))
          )
        );
  }

  onSubmit(form: NgForm) {
    const product = form.value;
    this.productsService.update(product).subscribe(value => console.log(value));
    this.router.navigate(['products']);
  }

}
