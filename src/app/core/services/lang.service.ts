import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {LangEnum} from "../enums/lang.enum";

@Injectable()
export class LangService {

  private currentLanguageSource = new BehaviorSubject<LangEnum>(LangEnum.EN);
  currentLanguage$ = this.currentLanguageSource.asObservable();

  get currentLanguageValue(): LangEnum {
    return this.currentLanguageSource.value;
  }

  setLangEnum(lang: LangEnum) {
    this.currentLanguageSource.next(lang);
  }
}
