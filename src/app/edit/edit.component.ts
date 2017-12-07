import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product;
  constructor(private _productService: ProductService, private _route: ActivatedRoute) {
      this.product = new Product();
      this._route.paramMap.subscribe( (params) => {
          this._productService.getProduct(params.get('id'), (result) => {
              console.log('got product', result);
              this.product = result;
          });
      });
  }

  delete() {
      this._productService.delete(this.product);
  }

  onSubmit() {
      this._productService.updateProduct(this.product);
  }

  ngOnInit() {
  }

}
