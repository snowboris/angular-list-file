import { Pipe } from "@angular/core";
import { File } from "./model";

@Pipe({
  name: "filter",
  pure: true
})

export class customFilter {
  transform(files: File[], dateFrom:string, dateTo: string): File[] {
    console.log(dateFrom + " dateToFinal = " +dateTo);
    let dateFromD = new Date(dateFrom.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1"));
    let dateToD = new Date(dateTo.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1"));
    return files.filter(file => {
      let timeDownload = new Date(file.timeDownload.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1"));
      if (timeDownload >= dateFromD && timeDownload <= dateToD) {
        return true;
      } else {
        return false;
      }
    });
  }
}