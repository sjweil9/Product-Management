import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product;

  constructor(private _productService: ProductService) {
      this.product = new Product();
  }

  onSubmit() {
      this._productService.createProduct(this.product);
      this.product = new Product();
  }

  ngOnInit() {
  }

}
