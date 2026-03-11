import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/productService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit, OnDestroy {

  product: Product | null = null;
  editProduct: Product | null = null;
  updateSuccess = false;
  private sub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id) ?? null;
      if (this.product) {
        this.editProduct = { ...this.product };
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveUpdate(): void {
    if (!this.editProduct) return;
    this.productService.updateProduct(this.editProduct);
    this.product = { ...this.editProduct };
    this.updateSuccess = true;
    setTimeout(() => this.updateSuccess = false, 3000);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}