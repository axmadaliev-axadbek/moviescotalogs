import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MovieContext } from '../Providers/MoviesStorage';
import CategoriesList from '../componets/Categories/Categories';
import Footer from '../componets/Footer/Footer';
// import Homepage from '../componets/HomePage/HomePage';
import Navbar from '../componets/Navbar/Navbar';


const CategoriesPage = () => {
    // const {title} = useContext(MovieContext)
    const title = 'Code'
    const [movies, setMovies]=useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const {type} = useContext(MovieContext)

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
            <Navbar moviesArr={movies.Search}/>
            <CategoriesList moviesArr={movies.Search} movieTitle={title} movieType={type}  />
            <Footer />

            <div>
           
            </div>
        </div>
    );
}

export default CategoriesPage;
