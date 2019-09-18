// import useContext - because this is how you use it
import React,{useState, useContext} from 'react';

import Movie from './Movie';

// import movie context 
import {MovieContext} from './MovieContext';

const MovieList = () => {

    // using the value (and pass in the context that we want to use)
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <> 

      
    {movies.map(movie => (
           <Movie name={movie.name} price={movie.price} key={movie.id} />
        ))} 
  </>

    )
  
}

export default MovieList; 


// the steps above is how you get ACCESS to that information, info is now available to you from MovieContext.js