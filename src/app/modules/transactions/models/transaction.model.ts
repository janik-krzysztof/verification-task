import {AmountCurrency} from "./amount-currency.model";
import {CreditDebitIndicatorEnum} from "../enums/credit-debit-indicator.model";

export class Transaction {
  amountCurrency: AmountCurrency;
  type: string;
  creditDebitIndicator?: CreditDebitIndicatorEnum;
}
