import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Offer {

    constructor(private http:HttpClient){}

      addOffer(newOffer:any){
        return this.http.post(API_URLS.offer.addOffer , newOffer)
      }
    
      getAllOffers(): Observable<any> {
        return this.http.get(API_URLS.offer.allOffers);
      }
    
      deleteOffer(offerId:any){
        return this.http.delete(API_URLS.offer.deleteOffer+offerId)
      }
    
      editOffer(offerId:any, newOffer:any){
        return this.http.put(API_URLS.offer.editOffer+offerId,newOffer)
      }
    
      getOfferById(offerId:any){
        return this.http.get(API_URLS.offer.getOfferById+offerId)
      }
  
}
