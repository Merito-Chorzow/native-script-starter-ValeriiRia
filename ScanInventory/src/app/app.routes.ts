import { Routes } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { AddProductComponent } from './views/add-product/add-product.component';
import { SettingsComponent } from './views/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'product-create', component: AddProductComponent },
  { path: 'settings', component: SettingsComponent } 
];