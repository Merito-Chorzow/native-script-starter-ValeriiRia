import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Observable } from 'rxjs';
import { ApiService, Product } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-product-list',
  standalone: true,
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  templateUrl: './product-list.component.html',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.apiService.products$();
  }

  onAddTap(): void {
    this.router.navigate(['/product-create']);
  }

  onSettingsTap(): void {
    this.router.navigate(['/settings']);
  }

  onItemTap(event: any): void {
    const tappedItem: Product = event.view.bindingContext;
    this.router.navigate(['/product-details', tappedItem.id]);
  }

  onDelete(productId: number): void {
    this.apiService.deleteProduct(productId).subscribe();
  }
}
