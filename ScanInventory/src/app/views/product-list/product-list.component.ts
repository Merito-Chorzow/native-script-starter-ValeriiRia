import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

@Component({
  selector: 'ns-product-list',
  standalone: true,
  imports: [
    NativeScriptCommonModule, 
    NativeScriptRouterModule
  ], 
  templateUrl: './product-list.component.html',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductListComponent {}