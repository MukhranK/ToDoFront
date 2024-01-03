import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksList } from '../models/task.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class TasksService {

  https: string = 'https://localhost:7066';

  

  constructor(private http: HttpClient)
  {
    
  }

  getAllTasks(): Observable<TasksList[]>
  {
    return this.http.get<TasksList[]>(this.https + '/api/tasks');
  }

  addTask(addTaskRequest: TasksList): Observable<TasksList>
  {
    addTaskRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<TasksList>(this.https + '/api/tasks', addTaskRequest);
  }

  getTask(id: string): Observable<TasksList>
  {
    return this.http.get<TasksList>(this.https + '/api/tasks/' + id);
  }

  updateTask(id: string, updateTaskRequest: TasksList): Observable<TasksList>
  {
    return this.http.put<TasksList>(this.https + '/api/tasks/' + id,updateTaskRequest);
  }

  deleteTask(id: string): Observable<TasksList>
  {
    return this.http.delete<TasksList>(this.https + '/api/tasks/' + id);
  }
}
