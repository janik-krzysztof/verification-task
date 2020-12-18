import {RouterModule, Routes} from "@angular/router";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TransactionsRouting {
}
