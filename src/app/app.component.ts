import {Component} from '@angular/core';
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {registerLocaleData} from "@angular/common";
import localeEn from '@angular/common/locales/en';
import localePl from '@angular/common/locales/pl';
import {LangEnum} from "./core/enums/lang.enum";

registerLocaleData(localeEn, 'en');
registerLocaleData(localePl, 'pl')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verification-task';
  languages = LangEnum;
  locale: LangEnum;

  constructor(private translate: TranslateService) {
    this.setDefaultLanguage(LangEnum.EN);

    this.translate.onLangChange
      .subscribe((langChangeEvent: LangChangeEvent) => this.locale = langChangeEvent.lang as LangEnum)

    this.translate.use(LangEnum.EN);
  }

  setCurrentLanguage(lang: LangEnum) {
    this.translate.use(lang);
  }

  isCheck(lang: LangEnum): boolean {
    return this.locale === lang;
  }

  private setDefaultLanguage(lang: LangEnum) {
    this.translate.setDefaultLang(lang);
  }
}
