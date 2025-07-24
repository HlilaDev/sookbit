import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Seller {

    constructor(private http:HttpClient){}

        addSeller(newSeller:any){
          return this.http.post(API_URLS.seller.addSeller , newSeller)
        }
      
        getAllSellers(): Observable<any> {
          return this.http.get(API_URLS.seller.allSellers);
        }
        deleteSeller(sellerId:any){
          return this.http.delete(API_URLS.seller.deleteSeller+sellerId)
        }     
      
        editSeller(sellerId:any, newSeller:any){
          return this.http.put(API_URLS.subcategory.editSubCategory+sellerId,newSeller)
        }
      
        getSellerById(sellerId:any){
          return this.http.get(API_URLS.subcategory.getSubCategoryById+sellerId)
        }
  
}
