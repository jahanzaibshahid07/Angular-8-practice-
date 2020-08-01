import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MovieResponse } from '../Person';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  
  movies: Array<MovieResponse>;

  constructor(private backend: BackendService) { }
 
  ngOnInit() {

    this.backend.GetMovies().
    subscribe(   
      m => {
        this.movies = m.items;
      }
    );

  }

}