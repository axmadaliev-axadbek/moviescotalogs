import React, { useState, useEffect } from 'react';

export const MovieContext = React.createContext()

const MoviesStorage = ({children}) => {
    const [title, setTitle] = useState('fantasy')
    const [movies, setMovies] = useState([])
    const [page, setPage]=useState(1)
    const [type, setType]=useState('series')
    const [loading, setLoading]= useState(false)
    console.log(movies);
    async function getMovies(){
        let res = await fetch(`https://www.omdbapi.com/?apikey=3ceadec0&s=${title}&${type}&page=${page}&`)
        res = await res.json()
        setMovies(res)
    }


    useEffect(() => {
        getMovies()
    }, []);

    return (
        <MovieContext.Provider value={{title, setTitle, movies, setPage, setType, type, loading}}>
            <MovieContext.Consumer>
                {
                    () => children
                }
            </MovieContext.Consumer>
        </MovieContext.Provider>
    );
}

export default MoviesStorage;