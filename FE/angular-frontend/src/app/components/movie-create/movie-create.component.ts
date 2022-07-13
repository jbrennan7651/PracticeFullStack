import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = new Movie();
  constructor(private movieService : MovieService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMovie(){
    this.movieService.create(this.movie).subscribe(data =>{
      console.log(data);
      this.goToMovieList();
    })
  }

  goToMovieList(){
    this.router.navigate(['/movies'])
  }

  onSubmit(){
    console.log(this.movie);
    this.saveMovie();
  }

}
