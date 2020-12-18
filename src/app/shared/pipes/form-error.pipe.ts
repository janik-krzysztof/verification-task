import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name: 'formError' })
export class FormErrorPipe implements PipeTransform {

  constructor(private translateService: TranslateService) { }

  transform(value: any, ...args: any[]) {
    if (value) {
      for (const error in value) {
        return this.translateService.instant(`errors.${error}`);
      }
    }
    return null;
  }

}
