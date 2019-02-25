import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'angular-list-files',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSelected = false;
  model = new Model();

// getTemp(dateFrom, dateTo) {
//   // this.getFiles(dateFrom, dateTo);

// }

getFiles() {
  return this.model.files.filter(item => !item.isShow);
}

  getTemp(dateFrom, dateTo) {
    let filesArray = this.model.files;
    for(let prop in filesArray) {
      let dateFromRight = dateFrom.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
      let dateToRight = dateTo.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
      dateFromRight = new Date(dateFromRight);
      dateToRight = new Date(dateToRight);
      let dateCur = filesArray[prop].timeDownload.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
      dateCur = new Date(dateCur);
      if (dateCur < dateFromRight || dateCur > dateToRight) {
        filesArray[prop].isShow = true;
      } else {
        filesArray[prop].isShow = false;
      }
    }
  }

  select() {
    this.isSelected = this.isSelected ? false : true;
  }
}
