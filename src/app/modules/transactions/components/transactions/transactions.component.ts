import {Component, OnDestroy, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {TransactionFilter} from "../../models/transactions-filter.model";
import {Transactions} from "../../models/transactions.model";
import {takeUntil, tap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {TransferService} from "../../services/transfer.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  transactions: Transactions;

  constructor(private transactionsService: TransactionsService,
              private transferService: TransferService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getTransactions();
    this.transfersListener();
  }

  private getTransactions(filter?: TransactionFilter): void {
    this.transactionsService
      .loadTransactionList(filter)
      .subscribe(list => this.transactions = list);
  }

  private transfersListener() {
    this.transferService.transfer$
      // .pipe(takeUntil(this.destroySubject))
      .subscribe(transfer => {
        this.transactionsService.addTransaction(this.transactions, transfer);
        console.log(this.transactions)
      })
  }

  ngOnDestroy() {

  }
}
