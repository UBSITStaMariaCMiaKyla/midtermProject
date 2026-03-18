export interface Supplier {
    id: number;
    supplierName: string;
    location: string;
    email: string;
    contactPerson: string;
    phone: string;
    productsSupplied: string[];
    category?: string;
    isActive?: boolean;
  }