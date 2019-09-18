import React, {useContext}  from 'react';
import {MovieContext} from './MovieContext'


const Nav = () => {
const [movies, setMovies] = useContext(MovieContext)

    return (
        <> 

        <div className="nav">
 <h3 className="title">Jashele Tillman</h3>
 <p className="listofmovies">List of Movies: {movies.length}</p>
 </div>


  </>

    )
  
}


export default Nav; 