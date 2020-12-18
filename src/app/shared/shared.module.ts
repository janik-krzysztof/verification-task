import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "./material.module";
import {TransferPreviewComponent} from "./components/transfer-preview/transfer-preview.component";
import {CurrencyMaskPipe} from "./pipes/currency-mask.pipe";
import {FormErrorPipe} from "./pipes/form-error.pipe";
import {CurrencySymbolPipe} from "./pipes/currency-symbol.pipe";

@NgModule({
  imports: [
    TranslateModule,
    MaterialModule
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    TransferPreviewComponent,
    CurrencyMaskPipe,
    FormErrorPipe,
    CurrencySymbolPipe
  ],
  declarations: [
    TransferPreviewComponent,
    CurrencyMaskPipe,
    FormErrorPipe,
    CurrencySymbolPipe
  ],
  providers: [],
  entryComponents: [TransferPreviewComponent]
})
export class SharedModule {
}
