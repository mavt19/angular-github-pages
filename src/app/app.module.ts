import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponentComponent } from './components/add-employee-component/add-employee-component.component';
import { ListEmployeeComponentComponent } from './components/list-employee-component/list-employee-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponentComponent,
    ListEmployeeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
