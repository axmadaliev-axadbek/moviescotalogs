import React from 'react';
import "./WatchFilm.scss"
import PlayBtn from "../../Assert/img/PlayBtn.png"
import Duration from "../../Assert/img/Duration.png"
import Date from "../../Assert/img/Date.png"
import { Link } from 'react-router-dom';

const Watchfilm = (moviesArr) => {
    const moviesStore =   moviesArr
    if(!moviesStore){
        return <></>
    }
    console.log('moviesStorellllllllll', moviesStore);    

    return (
        <div className='hero'>
            <div className='container watch'>
                <div className='watch-play'>
                    <Link to='/singleMovie'>
                        <img className='playLink' src={PlayBtn} alt="" />
                    </Link>        
                    <h2 className='watch-play__title'>Her & Him</h2>
                    <h4 className='watch-play__desc'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</h4>
                </div>
                
                <div className='flex-div episodes-div '>
                    <div className='episode'>
                        <div className='episode__play'>
                            <img src={PlayBtn} alt="" />
                        </div>
                        <div className='episode__info'>
                            <h4>Episode 1</h4>
                            <h2>First Meet</h2>
                            <h4>Lorem ipsum dolor sit amet, consec tetur adipis cing elit </h4>
                            <div className='flex-div'>
                                <img src={Duration} alt="" />
                                <img src={Date} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='episode'>
                        <div className='episode__play'>
                            <img src={PlayBtn} alt="" />
                        </div>
                        <div className='episode__info'>
                            <h4>Episode 1</h4>
                            <h2>First Meet</h2>
                            <h4>Lorem ipsum dolor sit amet, consec tetur adipis cing elit </h4>
                            <div className='flex-div'>
                                <img src={Duration} alt="" />
                                <img src={Date} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='episode'>
                        <div className='episode__play'>
                            <img src={PlayBtn} alt="" />
                        </div>
                        <div className='episode__info'>
                            <h4>Episode 1</h4>
                            <h2>First Meet</h2>
                            <h4>Lorem ipsum dolor sit amet, consec tetur adipis cing elit </h4>
                            <div className='flex-div'>
                                <img src={Duration} alt="" />
                                <img src={Date} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='black'>

            </div>
        </div>
    );
}

export default Watchfilm;
