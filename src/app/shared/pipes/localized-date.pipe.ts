import {Pipe, PipeTransform} from "@angular/core";
import {DatePipe} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";
import {LangEnum} from "../../core/enums/lang.enum";

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {
  }

  transform(value: Date, pattern: string = 'mediumDate'): string {
    if (value) {
      const currentLang = this.translateService.currentLang ? this.translateService.currentLang : LangEnum.EN;
      return (new DatePipe(currentLang)).transform(value, pattern);
    }
  }
}
