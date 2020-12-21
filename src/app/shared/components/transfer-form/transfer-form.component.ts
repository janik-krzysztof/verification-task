import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CurrencyMaskPipe} from "../../pipes/currency-mask.pipe";
import {TransferService} from "../../../modules/transactions/services/transfer.service";
import {TransferValidatorsService} from "../../../modules/transactions/services/transfer-validators.service";
import {Transfer} from "../../../modules/transactions/models/transfer.model";
import {MatDialog} from "@angular/material/dialog";
import {TransferPreviewComponent} from "../transfer-preview/transfer-preview.component";
import {Currency} from "../../../modules/transactions/models/currency.model";
import {DialogOptionsEnum} from "../../enums/dialog-options.enum";
import {CurrencySymbolEnum} from "../../enums/currency-symbol.enum";

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  @ViewChild('form') myNgForm: NgForm;

  fg: FormGroup;
  currentCurrency: Currency;

  constructor(private fb: FormBuilder,
              private currencyMaskPipe: CurrencyMaskPipe,
              private transferService: TransferService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.currentCurrency = this.transferService.currentCurrencyValue;

    this.fg = this.fb.group({
      accountFrom: new FormControl({
        value: this.getInitValueForFromAccount(),
        disabled: true
      }),
      accountTo: ['', Validators.required],
      amountCurrency: this.fb.group({
        amount: ['0.00', [
          Validators.required,
          Validators.min(0.01),
          TransferValidatorsService.maxAmountValidator(() => this.transferService.bankBalance, this.transferService.overdraftLimit),
        ]],
        currencyCode: this.currentCurrency.currencyCode
      })
    });
    this.formatCurrencyAmount();
  }

  onSubmit() {
    if (this.fg.valid) {
      this.showTransferPreviewDialog(this.fg.getRawValue())
        .subscribe((res: DialogOptionsEnum) => {
          if (res === DialogOptionsEnum.CONFIRM) {
            this.transferService.makeTransfer(this.fg.getRawValue());
            this.clearForm();
          }
        })
    }
  }

  getFormControl(controlName: string, groupName?: string): AbstractControl {
    if (groupName) {
      return this.fg.get(groupName).get(controlName);
    } else {
      return this.fg.get(controlName);
    }
  }

  clearInput(control: AbstractControl) {
    control.setValue(null);
  }

  parseCurrency(event: any) {
    const value: number = parseFloat(event.target.value);
    this.getFormControl('amount','amountCurrency').setValue(Number(value).toFixed(2));
  }

  private formatCurrencyAmount() {
    this.fg.valueChanges
      .subscribe((val: Transfer) => {
        const maskedVal = this.currencyMaskPipe.transform(val.amountCurrency.amount);
        if (val.amountCurrency.amount !== maskedVal) {
          this.fg.patchValue({
            amountCurrency: {
              amount: maskedVal
            }
          });
        }
      });
  }

  private getInitValueForFromAccount(): string {
    const currencySymbol: CurrencySymbolEnum = this.currentCurrency.currencySymbol;
    const bankBalance: number = this.transferService.bankBalance;

    return `Free checking(4692) - ${currencySymbol}${bankBalance}`
  }

  private showTransferPreviewDialog(transfer: Transfer) {
    return this.dialog.open<TransferPreviewComponent, Transfer>(TransferPreviewComponent, {
      data: transfer,
      width: '480px',
      height: '360px',
      panelClass: 'dialog',
    }).afterClosed();
  }

  private clearForm() {
    this.myNgForm.resetForm();
    this.getFormControl('accountFrom').setValue(this.getInitValueForFromAccount());
    this.getFormControl('amount','amountCurrency').setValue('0.00');
  }
}
