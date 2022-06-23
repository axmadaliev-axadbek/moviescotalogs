import React, { useContext, useEffect } from 'react';
// import "./SearcFilter.scss"
import { useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import Footer from '../componets/Footer/Footer';
import Navbar from '../componets/Navbar/Navbar';
import { MovieContext } from '../Providers/MoviesStorage';
import Founded from '../componets/Search/Founded';

const SingleCategory = () => {
    const {title} = useContext(MovieContext)
    const[movies, setMovies]=useState([])
    const [pageNumber, setPageNumber] = useState(1)  
    
    async function getMovies() {
        let res = await fetch(`https://www.omdbapi.com/?apikey=ba6f707d&s=${title}&page=${pageNumber}`)
        res = await res.json()
        setMovies(res)
    }
    useEffect(() => {
        getMovies()
    }, [pageNumber]);

    return (

       <div>
           <Navbar />

           <div className='search'>
                <div className='container'>                
                   
                    <h4 className="founded">Fantasy movies</h4>
                    {
                       movies.Search ? <Founded moviesArr={movies.Search}   /> : <h4 className="founded">Movies are not founded </h4>
                    }
                    {
                    Math.ceil(movies.totalResults / 10) > 1 ? <Stack spacing={2}>
                        <Pagination className='pagination' onChange={(event, page) => {
                            setPageNumber(page)
                            window.scrollTo(0, 0)
                        }} count={Math.ceil(movies.totalResults / 10)} variant="outlined" shape="rounded" />
                    </Stack> : <></>
                }
                </div>
           </div>
           <Footer />
       </div>
    );
}

export default SingleCategory;
