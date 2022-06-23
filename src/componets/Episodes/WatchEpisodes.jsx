import React from 'react';
import "./WatchEpisode.scss"
import PlayBtn from "../../Assert/img/PlayBtn.png"
import Duration from "../../Assert/img/Duration.png"
import Date from "../../Assert/img/Date.png"
import { Link } from 'react-router-dom';
const WatchEpisodes = ({moviesArr}) => {
    const moviesStore =   moviesArr
    if(!moviesStore){
        return <></>
    }
    const handleNavigate = () => {
        console.log('navigate');
    }
    return (
        
        <div className='hero'>
            <div className='container watch'>
                <div className='watch-play'>
                    <Link to='/singleMovie'>
                        <img  className='playLink' src={PlayBtn} alt="" />
                    </Link>
                    <img className='filmStart'  src={moviesStore[2].Poster} alt="" />
                   
                    <h2 className='watch-play__title'>Her & Him</h2>
                    <h4 className='watch-play__desc'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</h4>
                </div>
                
                <div className='flex-div episodes-div '>
                    {
                        moviesStore?.slice(0,3).map((element, index)=>  {
                            return   <div key={index} className='episode'>
                                <div className='episode__play'>
                                    <Link className='episode__play__playLink' to='/singleMovie'>
                                        <img onClick={handleNavigate} src={PlayBtn} alt="" />
                                    </Link> 
                                   
                                    <img className='episode__play__Start' onClick={handleNavigate} src={element.Poster} alt="" />
                                </div>
                                <div className='episode__info'>
                                    <h4>{element.Year}</h4>
                                    <h2>{element.Title}</h2>
                                    <h4>Lorem ipsum dolor sit amet, consec tetur adipis cing elit </h4>
                                    <div className='flex-div'>
                                        <img src={Duration} alt="" />
                                        <img src={Date} alt="" />
                                    </div>
                                </div>
                        </div>
                        })
                    }
                    
                </div>
                
            </div>
            <div className='black'>

            </div>
        </div>
    );
}
export default WatchEpisodes;
