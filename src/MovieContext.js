import React,{useState, createContext} from 'react';


// This just provides information to the different components
// You only need to set it up once
// The Provider's job is to just hold some information & then pass it down to all the different components that we want to

export const MovieContext = createContext();


export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {name: 'Harry Potter', 
        price: '$10', 
        id: 2566124}, 

        {name: 'Game of Thrones', 
        price: '$10', 
        id: 23124}, 

        {name: 'Inception', 
        price: '$10', 
        id: 23524}
    ])

    return (
        <>
        
       {/* This provider will provide the information to these components.  */}
       {/* Getting access to the movies  */}

        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
        </>
    )
}

