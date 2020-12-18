import {Transaction} from "./transaction.model";
import {Merchant} from "./merchant.model";
import {Dates} from "./dates.model";

export class TransactionItem {
  categoryCode: string;
  dates: Dates;
  transaction: Transaction;
  merchant: Merchant;
}
