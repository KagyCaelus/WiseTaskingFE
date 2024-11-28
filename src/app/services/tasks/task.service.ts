import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { task } from '../../models/task';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiURL + 'task'

  constructor(private http: HttpClient) {}

  getAllTasks(workspaceId: number): Observable<task[]> {
    return this.http.get<task[]>(`${this.apiUrl}workspace/${workspaceId}`);
  }

  getTaskById(id: number): Observable<task> {
    return this.http.get<task>(`${this.apiUrl}/${id}`);
  }

  createTask(task: task): Observable<void> {
    return this.http.post<void>(this.apiUrl, task);
  }

  updateTask(id: number, task: task): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
