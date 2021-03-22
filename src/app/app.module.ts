import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importing QueryBuilderModule from ej2-angular-querybuilder package.
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, QueryBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
