import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private http: HttpClient) { }

  getMovies(movie:any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`);
  }
}
