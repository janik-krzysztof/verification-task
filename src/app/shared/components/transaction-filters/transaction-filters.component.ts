import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SortOrder, TransactionFilter} from "../../../modules/transactions/models/transactions-filter.model";
import {TransactionSort} from "./models/transaction-sort.model";
import {SortTypeEnum} from "./models/enums/sort-type.enum";
import {TransactionSortFields} from "./models/enums/transaction-sort-fields.enum";

@Component({
  selector: 'app-transaction-filters',
  templateUrl: './transaction-filters.component.html',
  styleUrls: ['./transaction-filters.component.scss']
})
export class TransactionFiltersComponent implements OnInit {
  @Output() onFilter = new EventEmitter<TransactionFilter>();
  @Output() onSort = new EventEmitter<TransactionSort>();

  sort = new TransactionSort();
  filter = new TransactionFilter();
  sortTypeEnum = SortTypeEnum;
  sortingType: SortTypeEnum;
  sortingOrder = SortOrder.DESC;

  constructor() { }

  ngOnInit(): void {
  }

  filterBy(search: string) {
    this.emitFilter({search})
  }

  sortBy(type: SortTypeEnum): void {
    if (this.sortingType === type) {
      this.reverseSortingOrder();
    }
    this.sortingType = type;

    this.emitSort(({ field: TransactionSortFields.DATE, order: this.sortingOrder, type }))
  }

  reverseSortingOrder() {
    this.sortingOrder === SortOrder.ASC ? this.sortingOrder = SortOrder.DESC : this.sortingOrder = SortOrder.ASC
  }

  showSortBy(type: SortTypeEnum): boolean {
    return this.sortingType === type;
  }

  isSortingOrderAscending() {
    return this.sortingOrder === SortOrder.ASC;
  }

  private emitSort(sort: TransactionSort) {
    this.sort = sort;
    this.onSort.emit(this.sort);
  }

  private emitFilter(filter: TransactionFilter) {
    this.filter = filter;
    this.onFilter.emit(this.filter)
  }
}
