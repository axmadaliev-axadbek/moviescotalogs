import React from 'react';
import { useContext } from 'react';
import WatchEpisodes from '../componets/Episodes/WatchEpisodes';
import Footer from '../componets/Footer/Footer';
import Homepage from '../componets/HomePage/HomePage';
import Navbar from '../componets/Navbar/Navbar';
import Playvideos from '../componets/PlayVideos/PlayVideos';
import { MovieContext } from '../Providers/MoviesStorage';

const Home = () => {
    const {movies} = useContext(MovieContext)
    const {title} = useContext(MovieContext)
    const {type} = useContext(MovieContext)
    return (
        <div>
            <Navbar moviesArr={movies.Search}/>
            <Playvideos  moviesArr={movies.Search}/>
            <Homepage moviesArr={movies.Search} movieTitle={title} movieType={type}  />
            <WatchEpisodes moviesArr={movies.Search} movieTitle={title} movieType={type} />
            <Footer />
        </div>
    );
}

export default Home;
