import { Product } from './models/product.model';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly products: Product[] = [
    {id: 0, name: 'Monstar', description: 'Unleash the beast', price: 400},
    {id: 1, name: 'Redbull', description: 'Give you wings', price: 500},
    {id: 2, name: 'Power horse', description: 'Take it on', price: 450},
    {id: 3, name: 'Climax', description: 'It works deliciously', price: 300},
  ];

  constructor() { }

  getAll(): Observable<Product[]> {
    return of(this.products);
  }

  get(id: number): Observable<Product> {
    return from(this.products)
            .pipe(first(product => product.id === id, null));
  }

  add(newProduct): Observable<boolean> {
    const id = this.products.length;
    const product = {id, ...newProduct};
    this.products.push(product);
    return of(true);
  }

  update(product: Product): Observable<boolean> {
    const index = this.products.findIndex(prod => prod.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return of(true);
    }
    return of(false);
  }

  getCount(): Observable<number> {
    return of(this.products.length);
  }
}
