
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  searchTerm = '';
  term = '';
  movie: Movie = new Movie;
  idNum !: number;
  movies : Movie[] =  new Array ;

  
  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
    this.readMovies();
  }

  readMovies(): void{
    this.movieService.readAll().subscribe({
      next: (movies) => {
        console.log(JSON.stringify(movies));
        this.movies = movies;
      },
      error: (d) => console.log(d),
      complete: () => console.log('complete')
    })
  }

  refresh() : void{
    window.location.reload();
  }

  // setCurrentMovie(movie: any, index: any): void{
  //   this.currentIndex = index;
  //   this.currentMovie = movie;
  // }

  delete(id: number, movie: any){
    this.movieService.delete(id).subscribe(data => {
      console.log(data)
    });
    this.refresh()
  }

  readById(id: number, movie: Movie){
    this.movieService.update(id, movie).subscribe(data =>{
      console.log(movie)
      this.goToMovieById(id);
    })
  }

  goToMovieById(id: number){
    this.idNum = id;
    this.router.navigate([`/movies/${id}`])
  }

  // onSubmit(id: number){
  //   console.log(this.movie.id);
  //   this.goToMovieById(this.movie.id);
  // }

  // filterMovies(input : any){
  //   this.searchText = input;
  //   this.movies.filter(data => {
  //     for(let movie of this.movies){
  //       if(input = movie.id || input.equalsIgnoreCase(movie.title)|| input === movie.duration|| input === movie.genre || input === movie.rating){
  //         this.readById(movie.id, movie);
  //       }
  //       else()
  //     }
  //   })
  // }



}
