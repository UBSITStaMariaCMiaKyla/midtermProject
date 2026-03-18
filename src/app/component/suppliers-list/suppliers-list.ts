import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-list.html',
  styleUrls: ['./suppliers-list.css']
})
export class SuppliersListComponent implements OnInit {

  // Injects the supplier service and router
  private supplierService = inject(SupplierService);
  private router = inject(Router);

  // Holds the list of suppliers to display in the table
  suppliers = signal<Supplier[]>([]);

  // Controls modal visibility and which supplier to delete
  showModal = signal(false);
  supplierToDelete = signal<number | null>(null);

  // Loads all suppliers when the component starts
  ngOnInit(): void {
    this.suppliers.set(this.supplierService.getSuppliers());
  }

  // Filters suppliers based on search input
  onSearch(e: Event): void {
    const query = (e.target as HTMLInputElement).value;
    this.suppliers.set(this.supplierService.search(query));
  }

  // Navigates to the details page of the selected supplier
  viewSupplierDetails(id: number): void {
    this.router.navigate(['/suppliers', id]);
  }

  // Opens the delete confirmation modal
  confirmDelete(id: number): void {
    this.supplierToDelete.set(id);
    this.showModal.set(true);
  }

  // Confirms and performs the deletion
  onDelete(): void {
    const id = this.supplierToDelete();
    if (id !== null) {
      this.supplierService.deleteSupplier(id);
      this.suppliers.set(this.supplierService.getSuppliers());
    }
    this.showModal.set(false);
    this.supplierToDelete.set(null);
  }

  // Cancels the deletion and closes the modal
  cancelDelete(): void {
    this.showModal.set(false);
    this.supplierToDelete.set(null);
  }
}