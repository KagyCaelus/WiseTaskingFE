// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiURL + 'category'

  constructor(private http: HttpClient) {}

  getAllCategoriesByWorkspaceId(workspaceId: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/workspace/${workspaceId}`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }

  createCategory(category: Category): Observable<void> {
    return this.http.post<void>(this.apiUrl, category);
  }

  updateCategory(id: number, category: Category): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
