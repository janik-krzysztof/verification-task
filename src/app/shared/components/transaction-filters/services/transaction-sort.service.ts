import {Injectable} from "@angular/core";
import {TransactionSort} from "../models/transaction-sort.model";
import {TransactionItem} from "../../../../modules/transactions/models/transaction-item.model";
import {SortOrder} from "../../../../modules/transactions/models/transactions-filter.model";
import {SortTypeEnum} from "../models/enums/sort-type.enum";

@Injectable()
export class TransactionSortService {

  static sortByDate(list: TransactionItem[], sort: TransactionSort): TransactionItem[] {
    if (sort.order === SortOrder.ASC) {
      return list.sort((a: TransactionItem, b: TransactionItem) => a.dates.valueDate.getTime() - b.dates.valueDate.getTime());
    } else {
      return list.sort((a: TransactionItem, b: TransactionItem) => b.dates.valueDate.getTime() - a.dates.valueDate.getTime());
    }
  }

  static sortByNumber(list: TransactionItem[], sort: TransactionSort): TransactionItem[] {
    if (sort.order === SortOrder.ASC) {
      return list.sort((a: TransactionItem, b: TransactionItem) => a.transaction.amountCurrency.amount - b.transaction.amountCurrency.amount);
    } else {
      return list.sort((a: TransactionItem, b: TransactionItem) => b.transaction.amountCurrency.amount - a.transaction.amountCurrency.amount);
    }
  }

  static sortByText(list: TransactionItem[], sort: TransactionSort): TransactionItem[] {
    if (sort.order === SortOrder.ASC) {
      return list.sort((a: TransactionItem, b: TransactionItem) => a.merchant.name.localeCompare(b.merchant.name));
    } else {
      return list.sort((a: TransactionItem, b: TransactionItem) => b.merchant.name.localeCompare(a.merchant.name));
    }
  }

  sortTransactions(list: TransactionItem[], sort: TransactionSort): TransactionItem[] {
    switch (sort.type) {
      case SortTypeEnum.NUMBER:
        return TransactionSortService.sortByNumber(list, sort);
      case SortTypeEnum.DATE:
        return TransactionSortService.sortByDate(list, sort);
      case SortTypeEnum.TEXT:
        return TransactionSortService.sortByText(list, sort);
    }
  }
}
