import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class Product {

    constructor(private http:HttpClient){}

      addProduct(newProd:any){
        return this.http.post(API_URLS.product.addProduct , newProd)
      }
    
      getAllProducts(): Observable<any> {
        return this.http.get(API_URLS.product.allproducts);
      }
    
      deleteProduct(prodId:any){
        return this.http.delete(API_URLS.product.deleteProduct+prodId)
      }
    
      editProduct(prodId:any, newProd:any){
        return this.http.put(API_URLS.product.editProduct+prodId,newProd)
      }
    
      getProductById(prodId:any){
        return this.http.get(API_URLS.product.getProductById+prodId)
      }

}
