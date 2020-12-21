import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionsComponent} from './transactions.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {TransactionsService} from "../../services/transactions.service";
import {TransferService} from "../../services/transfer.service";
import {TransactionSortService} from "../../../../shared/components/transaction-filters/services/transaction-sort.service";
import {TransactionFilterService} from "../../../../shared/components/transaction-filters/services/transaction-filter.service";
import {DatePipe} from "@angular/common";

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      declarations: [TransactionsComponent],
      providers: [TransactionsService, TransferService, TransactionSortService, TransactionFilterService, DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
