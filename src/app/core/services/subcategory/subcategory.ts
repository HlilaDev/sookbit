import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Subcategory {

    constructor(private http:HttpClient){}

    addSubCategory(newSub:any){
      return this.http.post(API_URLS.subcategory.addSubCategory , newSub)
    }
  
    getAllSubCategories(): Observable<any> {
      return this.http.get(API_URLS.subcategory.allSubCategories);
    }
  
    deleteSubCategory(subId:any){
      return this.http.delete(API_URLS.subcategory.deleteSubCategory+subId)
    }
  
    editSubCategory(subId:any, newSub:any){
      return this.http.put(API_URLS.subcategory.editSubCategory+subId,newSub)
    }
  
    getSubCategoryById(subId:any){
      return this.http.get(API_URLS.subcategory.getSubCategoryById+subId)
    }
}
