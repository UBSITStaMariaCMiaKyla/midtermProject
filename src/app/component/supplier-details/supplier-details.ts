import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html',
  styleUrls: ['./supplier-details.css']
})
export class SupplierDetailsComponent implements OnInit {

  // Injects route, router, and supplier service
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private supplierService = inject(SupplierService);

  // Holds the currently selected supplier's data
  supplier = signal<Supplier | undefined>(undefined);

  // Gets the supplier ID from the URL and loads the matching supplier
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.supplier.set(this.supplierService.getSupplierById(id));
    });
  }

  // Saves the edited supplier data back to the service
  onSave(): void {
    const current = this.supplier();
    if (current) {
      this.supplierService.updateSupplier(current);
      alert('Supplier updated successfully!');
    }
  }

  // Goes back to the suppliers list page
  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}