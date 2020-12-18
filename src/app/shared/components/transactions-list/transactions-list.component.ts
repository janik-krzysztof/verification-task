import {Component, Input} from '@angular/core';
import {TransactionItem} from "../../../modules/transactions/models/transaction-item.model";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  @Input() transactionItems: TransactionItem[]

}
