import { Component } from '@angular/core';
import { Model, File } from './model';

@Component({
  selector: 'angular-list-files',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: Model = new Model();
  selectModel: Model = new Model();
  isSelected: boolean = false;
  selectCurrentValue : string = "Все";
  selectCurrrentValueParam: string = this.selectCurrentValue;
  dateDownload: string;
  dateStorage: string;

  getFiles() {
    return this.model.files;
  }

  getItemSelect() {
    return this.selectModel.files;
  }

  applyFilter(dateFrom, dateTo) {
    this.dateDownload = dateFrom;
    this.dateStorage = dateTo;
    this.selectCurrrentValueParam = this.selectCurrentValue;
  }

  // getDate(dateFrom?, dateTo?) {
  //   for (let prop in this.model.files) {
  //     let dateFromRight = dateFrom.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
  //     let dateToRight = dateTo.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
  //     dateFromRight = new Date(dateFromRight);
  //     dateToRight = new Date(dateToRight);
  //     let dateCur = this.model.files[prop].timeDownload.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
  //     dateCur = new Date(dateCur);
  //     if (dateCur < dateFromRight || dateCur > dateToRight) {
  //       this.model.files[prop].isShow = true;
  //     } else {
  //       this.model.files[prop].isShow = false;
  //     }
  //   }
  // }

  setSelectedVal(val) {
    this.selectCurrentValue = val;
  }

  select() {
    this.isSelected = this.isSelected ? false : true;
  }

  clearFilter(dateFrom, dateTo) {
    dateFrom.value = '';
    dateTo.value = '';
    this.selectCurrentValue = 'Все';
    for (let prop in this.model.files) {
      this.model.files[prop].isShow = false;
    }
  }

  deleteItem(curFile:any) {
    this.model.files.splice(this.model.files.indexOf(curFile),1)
    }
}
