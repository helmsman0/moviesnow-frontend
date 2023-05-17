import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  filmid:string=''
  films:any={}

  constructor(private viewActivatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    //to get path parameter from rout
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
