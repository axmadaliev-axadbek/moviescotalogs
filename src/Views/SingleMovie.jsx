import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../Providers/MoviesStorage';
import Footer from '../componets/Footer/Footer';
import Homepage from '../componets/HomePage/HomePage';
import Navbar from '../componets/Navbar/Navbar';
import Videoplayer from '../componets/VideoPlayer/VideoPlayer';
import video1 from '../Assert/video/video1.mp4'
import WatchEpisodes from '../componets/Episodes/WatchEpisodes';

const SingleFilmPage = () => {
    const {movies} = useContext(MovieContext)
    const {title} = useContext(MovieContext)
    // const {setTitle} = useContext(MovieContext)
    // const {setPage} = useContext(MovieContext)
    // const {setType} = useContext(MovieContext)
    const {type} = useContext(MovieContext)
    return (
        <div>
            <Navbar moviesArr={movies.Search}/>
            <Videoplayer src={video1} />
            <Homepage moviesArr={movies.Search} movieTitle={title} movieType={type}  />
            <Footer />
        </div>
    );
}

export default SingleFilmPage;
