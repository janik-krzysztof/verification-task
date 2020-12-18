import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionsRouting} from "./transactions.routing";
import {SharedModule} from "../../shared/shared.module";
import {TransferFormComponent} from '../../shared/components/transfer-form/transfer-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TransactionsService} from "./services/transactions.service";
import {TransferService} from "./services/transfer.service";
import {CurrencyMaskPipe} from "../../shared/pipes/currency-mask.pipe";


@NgModule({
  declarations: [
    TransactionsComponent,
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    TransactionsRouting,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [TransactionsService, TransferService, CurrencyMaskPipe]
})
export class TransactionsModule {
}
