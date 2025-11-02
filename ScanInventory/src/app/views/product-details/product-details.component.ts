import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-product-details',
  standalone: true,
  imports: [
    NativeScriptCommonModule
  ],
  templateUrl: './product-details.component.html',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductDetailsComponent {}