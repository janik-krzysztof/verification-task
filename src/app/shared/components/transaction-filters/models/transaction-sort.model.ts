import {SortOrder} from "../../../../modules/transactions/models/transactions-filter.model";
import {TransactionSortFields} from "./enums/transaction-sort-fields.enum";
import {SortTypeEnum} from "./enums/sort-type.enum";

export class TransactionSort {
  order: SortOrder;
  field: TransactionSortFields;
  type: SortTypeEnum;
}
