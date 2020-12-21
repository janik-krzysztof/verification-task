import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionsListItemComponent} from './transactions-list-item.component';
import {LocalizedDatePipe} from '../../pipes/localized-date.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {HasImgPipe} from '../../../modules/transactions/pipes/has-img.pipe';
import {CurrencySymbolPipe} from '../../pipes/currency-symbol.pipe';
import {CreditDebitIndicatorEnum} from "../../../modules/transactions/enums/credit-debit-indicator.model";
import {CurrencyCodeEnum} from "../../enums/currency-code.enum";
import {ImgPathPipe} from "../../../modules/transactions/pipes/img-path.pipe";

describe('TransactionsListItemComponent', () => {
  let component: TransactionsListItemComponent;
  let fixture: ComponentFixture<TransactionsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionsListItemComponent,
        HasImgPipe,
        CurrencySymbolPipe,
        LocalizedDatePipe,
        ImgPathPipe
      ],
      imports: [
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListItemComponent);
    component = fixture.componentInstance;

    component.transactionItem = {
      categoryCode: '#c89616',
      dates: {
        valueDate: new Date(1600214400000)
      },
      transaction: {
        amountCurrency: {
          amount: 46.25,
          currencyCode: CurrencyCodeEnum.EUR
        },
        type: 'Card Payment',
        creditDebitIndicator: CreditDebitIndicatorEnum.CRDT
      },
      merchant: {
        name: '7-Eleven',
        accountNumber: 'SI64397745065188826'
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
