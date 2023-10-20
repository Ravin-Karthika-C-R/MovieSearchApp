import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit{

  movieData: any=""
  search:any=false
  searchForm=this.fb.group({
    movie:['']
  })
 

constructor(private ds:MovieService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.search=false
  }

  searchMovie() {

    var movie=this.searchForm.value.movie
    console.log(movie);
    

    this.ds.getMovies(movie).subscribe(data=> {
        
          this.movieData = data

          this.search=true
        
      });
  }
}
