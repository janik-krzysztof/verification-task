import { AbstractControl, ValidatorFn } from '@angular/forms';
import {NumberUtils} from "../../../shared/utils/number.utils";

export class TransferValidatorsService {

  static maxAmountValidator(bankBalanceFn: () => number, overdraftLimit: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        if (NumberUtils.balanceOverdraft(control.value, bankBalanceFn(), overdraftLimit)) {
          return {
            bankBalanceOverdraft: true
          }
        }
        return null;
      }
      return null;
    }
  }
}
