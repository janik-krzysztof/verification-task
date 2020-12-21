import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "./material.module";
import {TransferPreviewComponent} from "./components/transfer-preview/transfer-preview.component";
import {CurrencyMaskPipe} from "./pipes/currency-mask.pipe";
import {FormErrorPipe} from "./pipes/form-error.pipe";
import {CurrencySymbolPipe} from "./pipes/currency-symbol.pipe";
import {TransactionsListItemComponent} from "./components/transactions-list-item/transactions-list-item.component";
import {TransactionsListComponent} from "./components/transactions-list/transactions-list.component";
import {ImgPathPipe} from "../modules/transactions/pipes/img-path.pipe";
import {HasImgPipe} from "../modules/transactions/pipes/has-img.pipe";
import {CommonModule, DatePipe} from "@angular/common";
import {TransactionFiltersComponent} from "./components/transaction-filters/transaction-filters.component";
import {TransactionSortService} from "./components/transaction-filters/services/transaction-sort.service";
import {TransactionFilterService} from "./components/transaction-filters/services/transaction-filter.service";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    TransferPreviewComponent,
    CurrencyMaskPipe,
    FormErrorPipe,
    CurrencySymbolPipe,
    TransactionsListComponent,
    TransactionsListItemComponent,
    ImgPathPipe,
    HasImgPipe,
    TransactionFiltersComponent
  ],
  declarations: [
    TransferPreviewComponent,
    CurrencyMaskPipe,
    FormErrorPipe,
    CurrencySymbolPipe,
    TransactionsListComponent,
    TransactionsListItemComponent,
    ImgPathPipe,
    HasImgPipe,
    TransactionFiltersComponent
  ],
  providers: [
    TransactionSortService,
    TransactionFilterService,
    DatePipe
  ],
  entryComponents: [TransferPreviewComponent]
})
export class SharedModule {
}
