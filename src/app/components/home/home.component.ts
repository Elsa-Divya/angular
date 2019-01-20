import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:any=[];
  cols:any = [];

  settings = {
    columns: {
      movie_title: {
        title: 'Title'
      },
      director_name: {
        title: 'Director name'
      },
      actor_1_name: {
        title: 'Name'
      },
      actor_2_name: {
        title: 'Name'
      },
      genres: {
        title: 'genres',
        sort:true
      },
      language: {
        title: 'language',
        sort:true,
        filter:true
      },
      country: {
        title: 'country',
        sort:true,
        filter:true
      },content_rating: {
        title: 'rating'
      },budget: {
        title: 'actor_2_name',
        sort:true,
        filter:true
      },title_year: {
        title: 'year',
        sort:true,
        filter:true
      },plot_keywords: {
        title: 'plot',
        filter:false
      },
      movie_imdb_link: {
        title: 'link'
      }
    },
    pager:{
      
        display:true,
        perPage:10
      
    },
    actions:{
      add:false,
      delete:false,
      edit:false
    }
  };
  constructor(private moviesService:MoviesService) {
    this.cols = [
      { field: 'movie_title', header: 'Title',width:'20%'},
      { field: 'director_name', header: 'Director' },
      { field: 'actor_1_name', header: 'Actor' },
      { field: 'actor_2_name', header: 'Actor' },
      { field: 'genres', header: 'Genres'},
      { field: 'language', header: 'Language' },
      { field: 'country', header: 'Country' },
      { field: 'content_rating', header: 'Rating' },
      { field: 'budget', header: 'Budget'},
      { field: 'title_year', header: 'Year' },
      { field: 'plot_keywords', header: 'Plot' },
      { field: 'movie_imdb_link', header: 'IMDB Link' }
  ];
   }

  ngOnInit() {
    this.moviesService.fetchMovies().subscribe(data=>{
      this.movies = data;
    })
  }

  setTheme(){
    
  }

}
