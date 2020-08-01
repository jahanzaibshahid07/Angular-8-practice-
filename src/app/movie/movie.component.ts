import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  
  movies: Array<any>;

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