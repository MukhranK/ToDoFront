import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksList } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit 
{

  tasksDetails: TasksList =
  {
    id: '',
    taskAuthor: '',
    taskDescription: ''
  };
errorMesage: any;

  constructor(private route: ActivatedRoute, private taskService: TasksService, private router: Router) 
  {
    
  }

                                       

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.taskService.getTask(id)
          .subscribe({
            next:(response) => {
              this.tasksDetails = response;
            },
            
            error: (errorMesage) => {
              errorMesage;
            }
          });
        }
      }
    })
  }
  
  updateTask()
  {
    this.taskService.updateTask(this.tasksDetails.id, this.tasksDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['tasks']);
      },

      error: (errorMesage) => {
        errorMesage;
      }

    });
  }

  deleteTask(id: string)
  {
    this.taskService.deleteTask(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['tasks']);
      },

      error: (errorMesage) => {
        errorMesage;
      }
      
    });
  }

} 
 