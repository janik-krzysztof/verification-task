import {Pipe, PipeTransform} from "@angular/core";
import {StringUtils} from "../../../shared/utils/string.utils";

@Pipe({ name: 'imgPath' })
export class ImgPathPipe implements PipeTransform {

  constructor() { }

  transform(name: string, path = 'assets/icons/', suffix = '.png'): string {
    name = name.toLocaleLowerCase();
    const dashName = StringUtils.replaceCharsInString(name, ' ', '-');
    return path + dashName + suffix;
  }
}
