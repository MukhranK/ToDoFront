import { Component, OnInit } from '@angular/core';
import { TasksList } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';



@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit{
  

  //showSuccessMessage = true;
  errorMesage = '';

  tasks: TasksList[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    //this.showSuccessMessage = true;
    this.taskService.getAllTasks()
    .subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (errorMesage) => {
        console.log(errorMesage);
        errorMesage;
      }
      
    }),
      setTimeout(() => {
        //this.showSuccessMessage = false
      }, 2000);

  }

}
