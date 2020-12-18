import {AmountCurrency} from "./amount-currency.model";
import {CreditDebitIndicator} from "../enums/credit-debit-indicator.model";

export class Transaction {
  amountCurrency: AmountCurrency;
  type: string;
  creditDebitIndicator: CreditDebitIndicator;
}
