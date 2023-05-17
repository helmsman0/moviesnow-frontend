import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 BASE_URL='http://localhost:3000'

//  searchTerm = new BehaviorSubject('')

  constructor(private http:HttpClient) { 
    
  }
  getmovies(){
    return this.http.get(`${this.BASE_URL}/films/all-films`)
  }
  //viwe-films
  viewfilms(id:any){
   return this.http.get(`${this.BASE_URL}/films/view-films/${id}`)
  }
}

