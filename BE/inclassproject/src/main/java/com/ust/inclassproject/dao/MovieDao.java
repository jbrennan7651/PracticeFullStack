package com.ust.inclassproject.dao;

import com.ust.inclassproject.model.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieDao {
    default  int insertMovie(Movie movie){
        int id = 0;
        return insertMovie(id, movie);
    }
    int insertMovie(int id, Movie movie);
    int updateMovie(int id, Movie movie);
    int deleteMovie(int id);
    List<Movie> queryMovies();
    Optional<Movie> queryMoviesById(int id);
}
