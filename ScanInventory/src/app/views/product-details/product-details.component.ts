import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Observable } from 'rxjs';
import { ApiService, Product } from '../../services/api.service';

@Component({
  selector: 'ns-product-list',
  standalone: true,
  imports: [
    NativeScriptCommonModule, 
    NativeScriptRouterModule
  ], 
  templateUrl: './product-details.component.html',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductDetailsComponent implements OnInit {
  
  public products$: Observable<Product[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
  }
}