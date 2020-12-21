import {Injectable} from "@angular/core";
import {Transfer} from "../models/transfer.model";
import {BehaviorSubject, Subject} from "rxjs";
import {Currency} from "../models/currency.model";
import {NumberUtils} from "../../../shared/utils/number.utils";
import {CurrencyCodeEnum} from "../../../shared/enums/currency-code.enum";
import {CurrencySymbolEnum} from "../../../shared/enums/currency-symbol.enum";

@Injectable()
export class TransferService {
  bankBalance = 5824.76;
  readonly overdraftLimit = -500;

  private currencyInitValue: Currency = {
    currencyCode: CurrencyCodeEnum.USD,
    currencySymbol: CurrencySymbolEnum.USD
  }

  private currentCurrencySource = new BehaviorSubject<Currency>(this.currencyInitValue);
  currentCurrency = this.currentCurrencySource.asObservable();

  private transferSource = new Subject<Transfer>();
  transfer$ = this.transferSource.asObservable();

  get currentCurrencyValue(): Currency {
    return this.currentCurrencySource.value;
  }

  makeTransfer(transfer: Transfer) {
    if (this.canMakeTransfer(transfer)) {
      this.bankBalance = NumberUtils.roundTwoDecimalPoint(this.bankBalance - transfer.amountCurrency.amount);
      this.transferSource.next(transfer);
    }
  }

  private canMakeTransfer(transfer: Transfer): boolean {
    return !NumberUtils.balanceOverdraft(transfer.amountCurrency.amount, this.bankBalance, this.overdraftLimit);
  }
}
