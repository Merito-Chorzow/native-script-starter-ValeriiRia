import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-add-product',
  standalone: true,
  imports: [
    NativeScriptCommonModule
  ],
  templateUrl: './add-product.component.html',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddProductComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}