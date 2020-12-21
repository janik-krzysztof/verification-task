import {Pipe, PipeTransform} from "@angular/core";
import {DatePipe} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {
  }

  transform(value: any, pattern: string = 'mediumDate'): string {
    return (new DatePipe(this.translateService.currentLang)).transform(value, pattern);
  }
}
