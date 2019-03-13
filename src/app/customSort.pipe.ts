import { Pipe } from "@angular/core";
import { File } from "./model";

@Pipe({
  name: "filter",
  pure: true
})

export class customFilter {
  transform(files: File[], dateFrom:string = '', dateTo: string = '', typeFile: string): File[] {
    let dateFromD: any = (dateFrom!= null )? new Date(dateFrom.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1")): null;
    let dateToD: any = (dateTo != null)?  new Date(dateTo.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1")): null;
    let isTrueType: boolean = true;
    let isDateDownload: boolean = true;
    let isDateStorage: boolean = true;
    return files.filter(file => {
      let timeDownload: Date = new Date(file.timeDownload.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1"));
      isDateDownload = (dateFromD == "Invalid Date" || dateFromD <= timeDownload)? true : false;
      isDateStorage = (dateToD == "Invalid Date" || dateToD >= timeDownload)? true : false;
      isTrueType = (typeFile!=="Все" && file.type!==typeFile) ? isTrueType = false : isTrueType = true;
      if (isDateDownload && isDateStorage && isTrueType) {
        return true;
      } else {
        return false;
      }
    });
  }
}