package com.ust.inclassproject.api;

import com.ust.inclassproject.model.Movie;
import com.ust.inclassproject.service.MovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import java.awt.desktop.OpenFilesEvent;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "movies")
public class MovieController {
    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @PostMapping(value = "", consumes = MediaType.APPLICATION_JSON_VALUE)
    int insertMovie(@RequestBody Movie movie){
        return movieService.insertMovie(movie);
    }

    @PutMapping(value = "/{id}")
    int updateMovie(@PathVariable("id") int id, @RequestBody Movie movie){
        return movieService.updateMovie(id, movie);
    }

    @DeleteMapping(value = "/{id}")
    int deleteMovie(@PathVariable("id") int id){
        return movieService.deleteMovie(id);
    }

    @GetMapping
    List<Movie> queryMovie(){
        return movieService.queryMovies();
    }

    @GetMapping(value = "/{id}")
    Optional<Movie> queryMovieById(@PathVariable("id") int id){
        return movieService.queryMovieByID(id);
    }
}
