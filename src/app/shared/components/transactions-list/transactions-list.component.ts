import {Component, Input} from '@angular/core';
import {TransactionItem} from "../../../modules/transactions/models/transaction-item.model";
import {transition, trigger, useAnimation} from "@angular/animations";
import {fadeInAnimation} from "../../animations/animations";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {params: {milliseconds: 400}})
      ]),
    ]),
  ],
})
export class TransactionsListComponent {
  @Input() transactionItems: TransactionItem[];
}
