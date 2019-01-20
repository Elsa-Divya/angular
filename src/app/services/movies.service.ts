import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {

   }

  public fetchMovies(){
    return this.http.get("http://starlord.hackerearth.com/movies")
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res)
                         
  }
   
   
}
