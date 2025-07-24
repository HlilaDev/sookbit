import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(private http:HttpClient){}


  getAllUsers(){
    return this.http.get(API_URLS.users.allusers)
  }
  editUser(userId:string , newUser:any):Observable<any>{
    return this.http.put(API_URLS.users.editUser+userId , newUser)
  }

  deleteUser(userId:string):Observable<any>{
    return this.http.delete(API_URLS.users.deleteUser+userId)
  }

  getUserById(userId:any):Observable<any>{
    return this.http.get(API_URLS.users.getUserById+userId)
  }


  
}
