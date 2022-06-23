import React from 'react';
import { Link } from 'react-router-dom';
import playBtn from "../../Assert/img/PlayButton.png"
import "./PlayVideos.scss"
const Playvideos = ({moviesArr}) => {
    const moviesStore =   moviesArr
    if(!moviesStore){
        return <></>
    }
    console.log('moviesStore', moviesStore);    
    return (
        <div className='homepage'>
        <div className='container'>
            <div className='playvideos'>
                <div className='playvideos__start'>
                    <img className='filmStart' src={moviesStore[2].Poster} alt="" />
                    
                    <Link to='/singleMovie'>
                        <img className='playBtn' src={playBtn} alt="" />
                    </Link>
                </div>
                <div className='filmInfo'>
                    <h2> The Legend of Sunrise </h2>
                    <p className='filmInfo__desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className='filmInfo__block'>
                        <h4> Genre : </h4> <h4>Adventure </h4>
                    </div>
                    <div className='filmInfo__block'>
                        <h4> Duration : </h4> <h4> 2 hr 45 mins  </h4>
                    </div>
                    <div className='filmInfo__block'>
                        <h4> Ratings :</h4> <h4>4.5 </h4>
                    </div>
                        
                </div>

            </div>
            <div className="trailer">
                <h3> Trailers</h3>
                <div className='flex-div episodes-div '>
                    {
                        moviesStore?.slice(1,5).map((element, index)=>  {
                            return   <div key={index} className='trailer__block'>
                            <Link className='Link__img' to='/singleMovie'>
                                <img className='filmStart' src={element.Poster} alt="" />    
                            </Link>   
                           
                            <span> 0{index+1}</span>
                        </div>
                        })
                    }
                    
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Playvideos;
