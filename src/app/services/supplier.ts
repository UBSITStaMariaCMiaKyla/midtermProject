import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private suppliers: Supplier[] = [
    { id: 1, supplierName: 'Altea Rai Inong', location: 'La Trinidad, Benguet', email: 'alteaing@freshfarms.ph', contactPerson: 'Altea Rai Inong', phone: '09171234501', productsSupplied: ['Strawberry'], category: 'Fruit Supplier', isActive: true },
    { id: 2, supplierName: 'Lm Cabatic', location: 'Cebu City, Cebu', email: 'lmcabatic@mangotraders.ph', contactPerson: 'Lm Cabatic', phone: '09281234502', productsSupplied: ['Mangga (Mango)'], category: 'Fruit Supplier', isActive: true },
    { id: 3, supplierName: 'Aj Manalo', location: 'Lucena City, Quezon', email: 'ajmanalo@tropicalfruits.ph', contactPerson: 'Aj Manalo', phone: '09391234503', productsSupplied: ['Lansones'], category: 'Fruit Distributor', isActive: false },
    { id: 4, supplierName: 'Andrei Beran', location: 'Davao City, Davao del Sur', email: 'andriberan@exoticproduce.ph', contactPerson: 'Andrei Beran', phone: '09451234504', productsSupplied: ['Rambutan', 'Lansones'], category: 'Fruit Distributor', isActive: true },
    { id: 5, supplierName: 'Erna Martinez', location: 'Tagum City, Davao del Norte', email: 'ernamartinez@duriangrowers.ph', contactPerson: 'Erna Martinez', phone: '09561234505', productsSupplied: ['Durian'], category: 'Fruit Supplier', isActive: false },
    { id: 6, supplierName: 'Hydi Toyeng', location: 'Puerto Princesa, Palawan', email: 'hyditoyeng@natureharvest.ph', contactPerson: 'Hydi Toyeng', phone: '09671234506', productsSupplied: ['Marang', 'Rambutan'], category: 'Fruit Supplier', isActive: true },
    { id: 7, supplierName: 'Cherrie Almazan', location: 'Lipa City, Batangas', email: 'cherriealmazan@orchardsupply.ph', contactPerson: 'Cherrie Almazan', phone: '09781234507', productsSupplied: ['Santol', 'Bayabas (Guava)'], category: 'Fruit Distributor', isActive: true },
    { id: 8, supplierName: 'Taylor Swift', location: 'Trece Martires, Cavite', email: 'taylorswift@freshgrowers.ph', contactPerson: 'Taylor Swift', phone: '09891234508', productsSupplied: ['Bayabas (Guava)', 'Atis (Sugar Apple)'], category: 'Fruit Supplier', isActive: true },
    { id: 9, supplierName: 'Beatrice Laus', location: 'Iloilo City, Iloilo', email: 'beatricelaus@tropicaltrading.ph', contactPerson: 'Beatrice Laus', phone: '09921234509', productsSupplied: ['Atis (Sugar Apple)', 'Santol'], category: 'Fruit Distributor', isActive: true },
    { id: 10, supplierName: 'Dagul', location: 'Santa Cruz, Laguna', email: 'dagul@jackfruitfarms.ph', contactPerson: 'Dagul', phone: '09031234510', productsSupplied: ['Langka (Jackfruit)', 'Marang'], category: 'Fruit Supplier', isActive: true },
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = { ...updatedSupplier };
    }
  }
}