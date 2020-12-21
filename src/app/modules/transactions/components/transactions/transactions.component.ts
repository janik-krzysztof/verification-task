import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {TransactionFilter} from "../../models/transactions-filter.model";
import {Transactions} from "../../models/transactions.model";
import {TransferService} from "../../services/transfer.service";
import {TransactionSort} from "../../../../shared/components/transaction-filters/models/transaction-sort.model";
import {TransactionSortService} from "../../../../shared/components/transaction-filters/services/transaction-sort.service";
import {TransactionFilterService} from "../../../../shared/components/transaction-filters/services/transaction-filter.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  private transactions: Transactions;
  filteredTransactions: Transactions

  constructor(private transactionsService: TransactionsService,
              private transferService: TransferService,
              private transactionSortService: TransactionSortService,
              private transactionFilterService: TransactionFilterService) {
  }

  ngOnInit(): void {
    this.getTransactions();
    this.transfersListener();
  }

  onFilter(filter: TransactionFilter): void {
    this.filteredTransactions.data = this.transactionFilterService
      .filterItems(this.transactions.data, this.filteredTransactions.data, filter);
  }

  onSort(sort: TransactionSort): void {
    this.transactions.data = this.transactionSortService.sortTransactions(this.transactions.data, sort);
  }

  private getTransactions(filter?: TransactionFilter): void {
    this.transactionsService
      .loadTransactionList(filter)
      .subscribe(list => {
        this.transactions = list;
        this.filteredTransactions = Object.assign({}, this.transactions);
      });
  }

  private transfersListener() {
    this.transferService.transfer$
      // .pipe(takeUntil(this.destroySubject))
      .subscribe(transfer => this.transactionsService.addTransaction(this.transactions, transfer))
  }
}
