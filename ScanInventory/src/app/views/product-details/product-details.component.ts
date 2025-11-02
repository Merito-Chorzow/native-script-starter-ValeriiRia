import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ns-product-details',
  standalone: true,
  imports: [NativeScriptCommonModule],
  templateUrl: './product-details.component.html',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductDetailsComponent implements OnInit {
  public productId: number;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.params['id']);
  }

  onDelete(): void {
    this.api.deleteProduct(this.productId).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
