import { Component, OnInit } from '@angular/core';
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
  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService, private router: Router) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplierDetails(id: number): void {
    this.router.navigate(['/suppliers', id]);
  }
}