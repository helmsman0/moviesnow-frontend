import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  films:any=[]
  searchkey:string = ''
  filmid: any;
  constructor(private viewActivatedRoute:ActivatedRoute,private api:ApiService){

  }
  
  
  ngOnInit(): void {
    
    
    this.api.getmovies().subscribe(
      (result:any)=>{
        console.log(result);
        this.films=result
      },
      (result:any)=>{
        alert(result.error)
      }
    )
    this.viewActivatedRoute.params.subscribe
    (
      (data:any)=>{
        this.filmid=data.id
      }
    )

       //call viewfilms
       this.api.viewfilms(this.filmid).subscribe(
        (result:any)=>{
          console.log(result);
          this.films=result
          
  
        }
        )
  }
  
  
}
