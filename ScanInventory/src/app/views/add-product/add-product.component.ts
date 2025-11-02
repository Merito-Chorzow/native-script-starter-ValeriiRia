import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Location, NgIf } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { takePicture, requestPermissions } from '@nativescript/camera';
import { ImageAsset } from '@nativescript/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ns-add-product',
  standalone: true,
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, NgIf],
  templateUrl: './add-product.component.html',
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddProductComponent {
  public productName: string = '';
  public imageSrc: ImageAsset;

  constructor(private location: Location, private apiService: ApiService) {}

  goBack(): void {
    this.location.back();
  }

  onTakePhoto(): void {
    requestPermissions()
      .then(() => takePicture({ width: 300, height: 300, keepAspectRatio: true }))
      .then((imageAsset) => {
        this.imageSrc = imageAsset;
        console.log('Photo taken!');
      })
      .catch((err) => {
        console.log('Camera error -> ' + (err?.message ?? err));
      });
  }

  onSave(): void {
    const title = this.productName.trim();
    if (!title) return;

    const newProduct = { title, body: 'Product description (with photo)' };

    this.apiService.addProduct(newProduct).subscribe(() => {
      this.goBack();
    });
  }
}
