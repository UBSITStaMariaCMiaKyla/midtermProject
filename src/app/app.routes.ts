import { Routes } from '@angular/router';

import { Home } from './component/home/home';
import { Navi } from './component/navi/navi';

import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Event } from './databinding/event/event';
import { TwoWay } from './databinding/two-way/two-way';

import { Products } from './products/products';
import { ProductsListComponent } from './component/products-list/products-list';
import { ProductDetails } from './component/product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'navi', component: Navi },

  { path: 'databinding/interpolation', component: Interpolation },
  { path: 'databinding/property', component: Property },
  { path: 'databinding/event', component: Event },
  { path: 'databinding/two-way', component: TwoWay },

  {
    path: 'products',
    component: Products,
    children: [
      { path: ':id/details', component: ProductDetails }
    ]
  },
  {
    path: 'plist',
    component: ProductsListComponent,
    children: [
      { path: ':id/details', component: ProductDetails }
    ]
  },

  { path: '**', redirectTo: 'home' },
];