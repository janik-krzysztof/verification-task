import {Component, Input, OnInit} from '@angular/core';
import {TransactionItem} from "../../../modules/transactions/models/transaction-item.model";

@Component({
  selector: 'app-transactions-list-item',
  templateUrl: './transactions-list-item.component.html',
  styleUrls: ['./transactions-list-item.component.scss'],
})
export class TransactionsListItemComponent implements OnInit {
  @Input() transactionItem: TransactionItem;

  constructor() { }

  ngOnInit(): void {
  }

}
