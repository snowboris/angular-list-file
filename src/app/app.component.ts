import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'angular-list-files',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new Model();
  selectModel = new Model();
  isSelected = false;
  selectCurrentValue = "Все";

  getFiles() {
    return this.model.files.filter(item => !item.isShow);
  }

  getItemSelect() {
    return this.selectModel.files;
  }

  getDate(dateFrom?, dateTo?) {
    for (let prop in this.model.files) {
      let dateFromRight = dateFrom.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
      let dateToRight = dateTo.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
      dateFromRight = new Date(dateFromRight);
      dateToRight = new Date(dateToRight);
      let dateCur = this.model.files[prop].timeDownload.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
      dateCur = new Date(dateCur);
      if (dateCur < dateFromRight || dateCur > dateToRight) {
        this.model.files[prop].isShow = true;
      } else {
        this.model.files[prop].isShow = false;
      }
    }
  }

  filterByTypeFile(val) {
    this.selectCurrentValue = val;

    for(let prop in this.model.files) {
      if(this.model.files[prop].type === val) {
        this.model.files[prop].isShow = false;
      } else {
        this.model.files[prop].isShow = true;
      }
    }
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

  testFun(arrFiles, curFile) {
    console.log(arrFiles.splice(0,1));
    console.log(arrFiles);
  }
}
