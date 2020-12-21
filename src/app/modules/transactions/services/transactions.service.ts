import {Injectable} from "@angular/core";
import {Transactions} from "../models/transactions.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {TransactionItem} from "../models/transaction-item.model";
import {TransactionFilter} from "../models/transactions-filter.model";
import {CreditDebitIndicatorEnum} from "../enums/credit-debit-indicator.model";
import {Transfer} from "../models/transfer.model";
import * as moment from 'moment';

@Injectable()
export class TransactionsService {
  private readonly GET_TRANSACTION_LIST = () => `assets/mock/transactions.json`;
  private transactions: Transactions;

  constructor(private httpClient: HttpClient) {
  }

  loadTransactionList(filter: TransactionFilter): Observable<Transactions> {
    return this.getTransactionList()
      .pipe(
        map((transactions: Transactions) => this.parseDates(transactions)),
        map((transactions: Transactions) => {
          if (this.hasFilters(filter)) {
            const filteredElements = transactions.data.filter(item => this.filterItem(item, filter));
            return {
              ...transactions,
              data: filteredElements
            }
          }
          return transactions;
        })
      )
  }

  addTransaction(list: Transactions, transfer: Transfer): void {
    list.data.unshift(this.convertToTransactionItem(transfer));
  }

  private convertToTransactionItem(transfer: Transfer): TransactionItem {
    return {
      categoryCode: '#919191',
      dates: {
        valueDate: new Date()
      },
      merchant: {
        accountNumber: '827432874283749823749',
        name: transfer.accountTo
      },
      transaction: {
        amountCurrency: transfer.amountCurrency,
        creditDebitIndicator: CreditDebitIndicatorEnum.DBIT,
        type: 'Online transfer'
      }
    }
  }

  private parseDates(transactions: Transactions): Transactions {
    return {
      ...transactions,
      data: transactions.data.map((t: TransactionItem) => {
        return {
          ...t,
          dates: {
            valueDate: new Date(t.dates.valueDate)
          }
        } as TransactionItem
      })
    }
  }

  private filterItem(item: TransactionItem, filter: TransactionFilter): boolean {
    return item.merchant.name.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase());
  }

  private getTransactionList(): Observable<Transactions> {
    if (this.transactions) {
      return of(this.transactions)
    }
    return this.requestTransactionList();
  }

  private requestTransactionList(): Observable<Transactions> {
    return this.httpClient.get<Transactions>(this.GET_TRANSACTION_LIST())
      .pipe(
        tap(list => this.transactions = list),
      );
  }

  private hasFilters(filter: TransactionFilter): boolean {
    return filter && !!filter.search;
  }
}
