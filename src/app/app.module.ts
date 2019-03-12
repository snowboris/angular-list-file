import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgxMaskModule} from 'ngx-mask';
import { customFilter } from './customSort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    customFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxMaskModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
