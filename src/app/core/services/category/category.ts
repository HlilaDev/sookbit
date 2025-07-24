import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

// Add the interface
export interface CategoryData {
  name: string;
  slug: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class Category {
  constructor(private http: HttpClient) {}

  addCategory(newCat: CategoryData): Observable<CategoryData> {
    return this.http.post<CategoryData>(API_URLS.category.addCategory, newCat);
  }

  getAllCategories(): Observable<CategoryData[]> {
    return this.http.get<CategoryData[]>(API_URLS.category.allCategories);
  }

  deleteCategory(catId: string): Observable<any> {
    return this.http.delete(API_URLS.category.deleteCategory + catId);
  }

  editCategory(catId: string, newCat: CategoryData): Observable<CategoryData> {
    return this.http.put<CategoryData>(API_URLS.category.editCategory + catId, newCat);
  }

  getCategoryById(catId: string): Observable<CategoryData> {
    return this.http.get<CategoryData>(API_URLS.category.getCategoryById + catId);
  }
}