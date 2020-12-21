import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransferPreviewComponent} from './transfer-preview.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TransferService} from "../../../modules/transactions/services/transfer.service";
import {TranslateModule, TranslatePipe} from "@ngx-translate/core";
import {Transfer} from "../../../modules/transactions/models/transfer.model";
import {CurrencyCodeEnum} from "../../enums/currency-code.enum";

const transferData: Transfer = {
  amountCurrency: {
    amount: 99,
    currencyCode: CurrencyCodeEnum.USD
  },
  accountTo: 'H&M',
  accountFrom: 'test'
}

describe('TransferPreviewComponent', () => {
  let component: TransferPreviewComponent;
  let fixture: ComponentFixture<TransferPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ TransferPreviewComponent, TranslatePipe ],
      providers: [
        {
          provide: MatDialog,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: transferData },
        { provide: MatDialogRef, useValue: {} },
        TransferService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
