import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {

   transform(value: string | number | null | undefined): string {

     if(value === null || value === "" || value === undefined)
      return "Unknown";

    switch (value) {
      case 0:
      case "0":
        return "Inactive";
      case 1:
      case "1":
        return "Active";
      case 2:
      case "2":
        return "Pending";
      case 3:
      case "3":
        return "Suspended";
      default:
        return "unknown";

    }
  }

}
