import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product[];
  
  constructor(private _productService: ProductService) {
      this.products = this._productService.products;
  }

  delete(product) {
      this._productService.delete(product);
  }

  ngOnInit() {
  }

}
