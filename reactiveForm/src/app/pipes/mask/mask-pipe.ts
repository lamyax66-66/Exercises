import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  
  transform(value: string | number | null | undefined, visableCount: number, maskChar: string = "*"): string {

    if (value == null || value == "" || value == undefined)
      return "";

    const stringValue = value.toString();
    const stringLength = stringValue.length;

    if (visableCount >= stringLength)
      return stringValue;
    else {
      const maskedLength = stringLength - visableCount;
      const maskedPart = maskChar.repeat(maskedLength);
      const visablepart = stringValue.slice(-visableCount);
      return maskedPart + visablepart;
    }

  }

}
