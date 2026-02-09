import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  
  transform(value: string | number | null | undefined, visibleCount: number, maskChar: string = "*"): string {

    if (value == null || value == "")
      return "";

    const stringValue = value.toString();
    const stringLength = stringValue.length;

    if (visibleCount >= stringLength)
      return stringValue;
    else {
      visibleCount = Math.max(0, visibleCount)
      const maskedLength = stringLength - visibleCount;
      const maskedPart = maskChar.repeat(maskedLength);
      const visablepart = stringValue.slice(-visibleCount);
      return maskedPart + visablepart;
    }

  }

}
