import {Injectable} from "@angular/core";
import {TransactionItem} from "../../../../modules/transactions/models/transaction-item.model";
import {TransactionFilter} from "../../../../modules/transactions/models/transactions-filter.model";
import {DatePipe} from "@angular/common";

@Injectable()
export class TransactionFilterService {

  constructor(private datePipe: DatePipe) {
  }

  filterItems(list: TransactionItem[], filteredList: TransactionItem[], filter: TransactionFilter): TransactionItem[] {
    if (!filter.search) {
      return list;
    } else {
      return Object.assign([], list).filter(
        (item: TransactionItem) => {
          return item.merchant.name.toLowerCase().indexOf(filter.search.toLowerCase()) > -1
          || item.transaction.amountCurrency.amount.toString().toLowerCase().indexOf(filter.search.toLowerCase()) > -1
          || item.transaction.type.toLowerCase().indexOf(filter.search.toLowerCase()) > -1
          || this.datePipe.transform(item.dates.valueDate, 'MMM. dd').toLowerCase().indexOf(filter.search.toLowerCase()) > -1
        }
      )
    }
  }
}
