import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Transfer} from "../../../modules/transactions/models/transfer.model";
import {Currency} from "../../../modules/transactions/models/currency.model";
import {TransferService} from "../../../modules/transactions/services/transfer.service";
import {DialogOptionsEnum} from "../../enums/dialog-options.enum";

@Component({
  selector: 'app-transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.scss']
})
export class TransferPreviewComponent implements OnInit {
  dialogOptions = DialogOptionsEnum;
  currentCurrency: Currency;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transfer,
              private dialogRef: MatDialogRef<TransferPreviewComponent>,
              private transferService: TransferService) {
  }

  ngOnInit() {
    this.currentCurrency = this.transferService.currentCurrencyValue;
  }

  close(result: DialogOptionsEnum) {
    this.dialogRef.close(result);
  }
}
