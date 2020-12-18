import { Pipe, PipeTransform } from "@angular/core";
import {StringUtils} from "../../../shared/utils/string.utils";

@Pipe({ name: 'hasImg' })
export class HasImgPipe implements PipeTransform {

  private iconNames = [
    '7-eleven',
    'amazon-online-store',
    'backbase',
    'h&m-online-store',
    'jerry-hildreth',
    'lawrence-pearson',
    'southern-electric-company',
    'texaco',
    'the-tea-lounge',
    'whole-foods'
  ]

  constructor() {}

  transform(name: string): boolean {
    const nameWithDashes = StringUtils.replaceCharsInString(name, ' ', '-');
    return this.iconNames.includes(nameWithDashes.toLocaleLowerCase());
  }
}
