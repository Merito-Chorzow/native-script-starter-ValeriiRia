import { Routes } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { AddProductComponent } from './views/add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
];