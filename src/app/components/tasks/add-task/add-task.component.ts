import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TasksList } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{


  showSuccessMessage = false;

  
  

  addTaskRequest: TasksList = {
    id: '',
    taskAuthor: '',
    taskDescription: ''
  }

  constructor(private taskService: TasksService, private router: Router) {
    
  }

  ngOnInit(): void {
    
  }

  addTask()
  {
    this.showSuccessMessage = true;

    

    this.taskService.addTask(this.addTaskRequest).subscribe({
      next: (task) => {
        this.router.navigate(['tasks']);
      }
    })
  }

}
 