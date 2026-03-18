import { Injectable } from '@angular/core';
import { Product } from "../models/product.interface";

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Strawberry', category: 'Imported Fruit', price: 320.00, stock: 50, status: 'Available', description: 'Sweet and slightly tart berries from Baguio City, sold per kilo.', brand: 'Baguio Fresh', rating: 4.8, discount: 0 },
    { id: 2, name: 'Mangga (Mango)', category: 'Native Fruit', price: 120.00, stock: 120, status: 'Available', description: 'Sweet Philippine carabao mango per kilo, one of the best in the world.', brand: 'Cebu Farms', rating: 4.9, discount: 5 },
    { id: 3, name: 'Lansones', category: 'Native Fruit', price: 90.00, stock: 0, status: 'Out of Stock', description: 'Sweet fruit from Camiguin sold per kilo, usually eaten in clusters.', brand: 'Camiguin Harvest', rating: 4.5, discount: 0 },
    { id: 4, name: 'Rambutan', category: 'Native Fruit', price: 80.00, stock: 3, status: 'Limited', description: 'Hairy red fruit with sweet juicy white flesh, priced per kilo.', brand: 'Davao Fresh', rating: 4.3, discount: 10 },
    { id: 5, name: 'Durian', category: 'Native Fruit', price: 200.00, stock: 0, status: 'Out of Stock', description: 'King of fruits from Davao, strong smell but very rich and creamy taste, per kilo.', brand: 'Davao King', rating: 4.7, discount: 0 },
    { id: 6, name: 'Marang', category: 'Native Fruit', price: 150.00, stock: 8, status: 'Available', description: 'Soft and sweet fruit from Mindanao, similar to jackfruit but milder, per kilo.', brand: 'Mindanao Fruits', rating: 4.4, discount: 0 },
    { id: 7, name: 'Santol', category: 'Native Fruit', price: 60.00, stock: 2, status: 'Limited', description: 'Sweet and sour fruit great for pickling and salads, sold per kilo.', brand: 'Laguna Farms', rating: 4.0, discount: 15 },
    { id: 8, name: 'Bayabas (Guava)', category: 'Native Fruit', price: 50.00, stock: 60, status: 'Available', description: 'Common backyard fruit used for juice, jam, and herbal medicine, per kilo.', brand: 'Local Harvest', rating: 4.2, discount: 0 },
    { id: 9, name: 'Atis (Sugar Apple)', category: 'Native Fruit', price: 110.00, stock: 5, status: 'Limited', description: 'Creamy and sweet fruit with bumpy green skin, very soft inside, per kilo.', brand: 'Visayas Fresh', rating: 4.6, discount: 5 },
    { id: 10, name: 'Langka (Jackfruit)', category: 'Native Fruit', price: 70.00, stock: 30, status: 'Available', description: 'Large tropical fruit used both ripe and unripe in Filipino dishes, per kilo.', brand: 'Quezon Farms', rating: 4.5, discount: 10 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.products[idx] = { ...updated };
  }

  // Removes a product from the list by ID
  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth-token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}