package com.ust.inclassproject.service;

import com.ust.inclassproject.dao.MovieDao;
import com.ust.inclassproject.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private final MovieDao movieDao;

    @Autowired
    public MovieService(@Qualifier("MovieRepository")MovieDao movieDao){
        this.movieDao = movieDao;
    }

    public int insertMovie(Movie movie) {
        return movieDao.insertMovie(movie);
    }

    public int updateMovie(int id, Movie movie) {
        return movieDao.updateMovie(id, movie);
    }

    public int deleteMovie(int id) {
        return movieDao.deleteMovie(id);
    }

    public List<Movie> queryMovies() {
        return movieDao.queryMovies();
    }

    public Optional<Movie> queryMovieByID(int id) {
        return movieDao.queryMoviesById(id);
    }
}
