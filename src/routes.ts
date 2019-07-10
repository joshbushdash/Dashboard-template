import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/Sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './app/Sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './app/Sections/section-health/section-health.component';

export const appRoutes: Routes = [
    { path: 'inventor', component: SectionSalesComponent},
    { path: 'vault', component: SectionOrdersComponent},
    { path: 'factory', component: SectionHealthComponent},

    { path: '', redirectTo: '/inventor', pathMatch: 'full'},
]