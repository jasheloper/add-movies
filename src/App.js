import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';


// Curly braces because we are not exporting it as default 
import { MovieProvider } from './MovieContext';

function App() {
  return (

    // Wrap all the components that we want to pass that state down to with the Movie Provider
    
    <MovieProvider>
        <div className="App">
          <Nav />
        <AddMovie />
        <MovieList />
        </div>
    </MovieProvider>
  );
}

export default App;
