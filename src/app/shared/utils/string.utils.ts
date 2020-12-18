export class StringUtils {

  static replaceCharsInString(value: string, search: string, replace: string): string {
    const replaceSpacesRegexp = new RegExp(search, 'g');
    value = value.toLocaleLowerCase();
    return value.replace(replaceSpacesRegexp, replace);
  }
}
