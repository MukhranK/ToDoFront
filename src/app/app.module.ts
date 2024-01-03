import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { DeleteTaskComponent } from './components/tasks/delete-task/delete-task.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    SearchTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
