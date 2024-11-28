// src/app/services/workspace.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { workspace } from '../../models/workspace';
import { workspaceUser } from '../../models/workspace-user';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private apiUrl = environment.apiURL + 'Workspace'

  constructor(private http: HttpClient) {}

  getAllUserWorkspaces(userId: number): Observable<workspace[]> {
    return this.http.get<workspace[]>(`${this.apiUrl}/getlist/${userId}`);
  }

  getWorkspaceById(id: number): Observable<workspace> {
    return this.http.get<workspace>(`${this.apiUrl}/${id}`);
  }

  createWorkspace(workspace: workspaceUser): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/create`, workspace);
  }

  updateWorkspace(id: number, workspace: workspace): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, workspace);
  }

  deleteWorkspace(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
