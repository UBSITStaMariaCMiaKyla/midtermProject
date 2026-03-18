import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/productService';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  searchId: number | null = null;
  foundProduct: Product | null = null;
  editProduct: Product | null = null;
  updateSuccess = false;
  isLoggedIn = false;

  products: Product[] = [];

  // Controls modal visibility and which product to delete
  showModal = signal(false);
  productToDelete = signal<number | null>(null);

  constructor(private productService: ProductService) {
    this.isLoggedIn = this.productService.isAuthenticated();
    this.products = this.productService.getProducts();
  }

  searchProduct() {
    if (this.searchId === null) return;
    this.foundProduct = this.productService.getProductById(this.searchId) ?? null;
    if (this.foundProduct) {
      this.editProduct = { ...this.foundProduct };
    }
  }

  saveUpdate() {
    if (!this.editProduct) return;
    this.productService.updateProduct(this.editProduct);
    this.updateSuccess = true;
    setTimeout(() => this.updateSuccess = false, 3000);
  }

  // Opens the delete confirmation modal
  confirmDelete(id: number): void {
    this.productToDelete.set(id);
    this.showModal.set(true);
  }

  // Confirms and performs the deletion
  onDelete(): void {
    const id = this.productToDelete();
    if (id !== null) {
      this.productService.deleteProduct(id);
      this.products = this.productService.getProducts();
    }
    this.showModal.set(false);
    this.productToDelete.set(null);
  }

  // Cancels the deletion and closes the modal
  cancelDelete(): void {
    this.showModal.set(false);
    this.productToDelete.set(null);
  }

  login() {
    this.productService.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.productService.logout();
    this.isLoggedIn = false;
  }
}