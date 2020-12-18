import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionsRouting} from "./transactions.routing";
import {SharedModule} from "../../shared/shared.module";
import {TransferFormComponent} from './components/transfer-form/transfer-form.component';
import {TransactionsListComponent} from './components/transactions-list/transactions-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TransactionsService} from "./services/transactions.service";
import {TransactionsListItemComponent} from './components/transactions-list-item/transactions-list-item.component';
import {ImgPathPipe} from "./pipes/img-path.pipe";
import {HasImgPipe} from "./pipes/has-img.pipe";
import {TransferService} from "./services/transfer.service";
import {CurrencyMaskPipe} from "../../shared/pipes/currency-mask.pipe";


@NgModule({
  declarations: [
    TransactionsComponent,
    TransferFormComponent,
    TransactionsListComponent,
    TransactionsListItemComponent,
    ImgPathPipe,
    HasImgPipe
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
