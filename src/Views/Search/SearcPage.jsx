import React, { useContext, useEffect } from 'react';
import "./SearcFilter.scss"
import { useRef } from 'react';
import { useState } from 'react';
import Footer from '../../componets/Footer/Footer';
import Navbar from '../../componets/Navbar/Navbar';
import { MovieContext } from '../../Providers/MoviesStorage';
import search from '../../Assert/img/search.png'
import Founded from '../../componets/Search/Founded';
import { Pagination, Stack } from '@mui/material';

const Searchpage = () => {
    const {title} = useContext(MovieContext)
    const [serachInput, setSeartchInput] =useState(title)
    const[movies, setMovies]=useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const titleRef = useRef()
    const navbarSearch =useRef()
    const navbarLabel =useRef()
    const addStyle = () => {
        navbarLabel.current.style.display= 'flex'
        navbarSearch.current.style.display= 'none'
    }
    
    async function getMovies() {
        let res = await fetch(`https://www.omdbapi.com/?apikey=ba6f707d&s=${serachInput}&page=${pageNumber}`)
        res = await res.json()
        setMovies(res)
    }
    useEffect(() => {
        getMovies()
    }, [pageNumber, serachInput]);

    return (

       <div>
           <Navbar />

           <div className='search'>
                <div className='container'>
                    
                    <label ref={navbarLabel} className="label-search label" >
                        <input  ref={titleRef}  type="text" className="label-search__input" placeholder="Enter search phrase.." autoComplete="off" />
                        <button   className="label-search__img" onClick={()=>{
                            setSeartchInput(titleRef.current.value)
                            setPageNumber(1)
                        }}> 
                            <img src={search} alt="" />
                        </button>
                    </label>
                    <button  ref={navbarSearch}  className="navbar__search"> <img onClick={addStyle} src={search} alt="" /></button>
                    
                    <h4 className="founded">founded moviees</h4>
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

export default Searchpage;
