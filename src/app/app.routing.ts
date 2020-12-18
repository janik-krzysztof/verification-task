import {Routes} from "@angular/router";

export const AppRoutes: Routes = [
  {
   path: '',
   redirectTo: 'transactions',
   pathMatch: 'full'
  },
  {
    path: 'transactions',
    loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule)
  }
];
