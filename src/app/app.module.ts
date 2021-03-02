import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskInputComponent,
    TaskListComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
