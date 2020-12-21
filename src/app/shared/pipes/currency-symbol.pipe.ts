import {Pipe, PipeTransform} from "@angular/core";
import {CurrencyCodeEnum} from "../enums/currency-code.enum";
import {CurrencySymbolEnum} from "../enums/currency-symbol.enum";

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

  transform(value: CurrencyCodeEnum): CurrencySymbolEnum {
    switch (value) {
      case CurrencyCodeEnum.USD:
        return CurrencySymbolEnum.USD
      case CurrencyCodeEnum.EUR:
        return CurrencySymbolEnum.EUR
      default:
        return null
    }
  }
}
