// src/app/views/product-list/product-list.component.ts
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core'; // <-- Добавлен OnInit
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Observable } from 'rxjs'; // <-- Добавлен Observable
import { ApiService, Product } from '../../services/api.service'; // <-- Добавлен сервис

@Component({
  selector: 'ns-product-list',
  standalone: true,
  imports: [
    NativeScriptCommonModule, 
    NativeScriptRouterModule
    // Мы НЕ импортируем layouts, так как используем NO_ERRORS_SCHEMA
  ], 
  templateUrl: './product-list.component.html',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductListComponent implements OnInit { // <-- Добавлен implements OnInit
  
  // 👇 ВОТ ПЕРЕМЕННАЯ, КОТОРУЮ НЕ МОГ НАЙТИ КОМПИЛЯТОР
  public products$: Observable<Product[]>;

  constructor(private apiService: ApiService) {} // <-- Добавлен сервис

  ngOnInit(): void { // <-- Добавлена логика
    this.products$ = this.apiService.getProducts();
  }
}