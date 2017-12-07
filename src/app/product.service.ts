import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {
  products: Product[];
  product_count: number;

  constructor(private _router: Router) {
      this.products = [];
      this.product_count = 1;
  }

  createProduct(product) {
      product.id = this.product_count++;
      this.products.push(product);
  }

  updateProduct(product) {
      for (let i = 0, len = this.products.length; i !== len; i++) {
          if (this.products[i].id === product.id) {
              this.products[i] = product;
              break;
          }
      }
      this._router.navigateByUrl('/products');
  }

  delete(product) {
      for (let i = 0, len = this.products.length; i !== len; i++) {
          if (this.products[i].id === product.id) {
              this.products.splice(i, 1);
              break;
          }
      }
  }

  getProduct(id, callback) {
      for (let i = 0, len = this.products.length; i !== len; i++) {
          if (this.products[i].id == id) {
              callback(this.products[i]);
              break;
          }
      }
  }

}
