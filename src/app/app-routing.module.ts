import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent
  },

  {
    path: 'tasks',
    component: TasksListComponent
  },

  {
    path: 'tasks/add',
    component: AddTaskComponent
  },

  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent
  },

  {
    path: 'tasks/search',
    component: SearchTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
