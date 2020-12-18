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
import {CommonModule} from "@angular/common";

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
    HasImgPipe
  ],
  declarations: [
    TransferPreviewComponent,
    CurrencyMaskPipe,
    FormErrorPipe,
    CurrencySymbolPipe,
    TransactionsListComponent,
    TransactionsListItemComponent,
    ImgPathPipe,
    HasImgPipe
  ],
  providers: [],
  entryComponents: [TransferPreviewComponent]
})
export class SharedModule {
}
