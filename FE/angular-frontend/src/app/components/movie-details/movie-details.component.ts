import { NgIfContext } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  currentId !: any;
  movie !: Movie;
  movies : Movie[] = new Array;
 
  constructor(private movieService: MovieService, 
    private activeRouter : ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit(): void {
    this.currentId = this.activeRouter.snapshot.paramMap.get('id');
    this.displayMovieById(this.currentId);
  }

  displayMovieById(id : any) : void{
    this.movieService.readById(id).subscribe({
      next: (movie) =>{
        console.log(movie);
        this.movie = movie;
      }
      
    })
  }  
  delete(id: number, movie: any){
    this.movieService.delete(id).subscribe(data => {
      console.log(data)
    });
    this.goToMovies()
  }

  goToMovies(){
    this.router.navigate([`/movies`])
  }

  onSubmit(id: number, movie: Movie){
    console.log(this.movie);
    this.movieService.update(id, movie).subscribe({
      next: (movie) =>{
        console.log(movie);
        this.movie = movie;
      }
    });
    this.displayMovieById(id);
  }
}
