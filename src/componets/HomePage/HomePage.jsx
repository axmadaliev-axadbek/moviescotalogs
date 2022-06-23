import React from 'react';
import "./HomePage.scss"
import Duration from "../../Assert/img/Duration.png"
import Ratings from "../../Assert/img/Ratings.png"
import { Link } from 'react-router-dom';
const Homepage = ({moviesArr}) => {
    const moviesStore = moviesArr
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>My Last Watch</h4>
                        <Link to={`/CategoriesOf/mylastwatch`}> View More</Link>
                    </div>

                    {/* cotalog */}
                    <div className='movies-block__two flex-div'>

                        {
                            moviesStore?.slice(0,5).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >                                            
                                                <Link className='Link__img' to='/singleMovie'>
                                                    <img className='Link__img' src={element.Poster} alt="" />
                                                </Link>
                                                <span className='movies-Box__genre'>{element.Type}</span>
                                                <h5 className='movies-Box__title'>{element.Title}</h5>
                                                <div className='movies-Box__duration'>
                                                    <img src={Duration} alt="" />
                                                    <img src={Ratings} alt="" />
                                                </div>
                                        </div>                                    
                            })
                        }
                    </div>                  
                   
                </div>
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Top Movies</h4>
                        <Link to={`/CategoriesOf/topmovies`}> View More</Link>
                    </div>

                    {/* cotalog */}
                    <div className='movies-block__two flex-div'>

                        {
                            moviesStore?.slice(5,10).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >                                            
                                                <Link className='Link__img' to='/singleMovie'>
                                                    <img className='Link__img' src={element.Poster} alt="" />
                                                </Link>
                                                <span className='movies-Box__genre'>{element.Type}</span>
                                                <h5 className='movies-Box__title'>{element.Title}</h5>
                                                <div className='movies-Box__duration'>
                                                    <img src={Duration} alt="" />
                                                    <img src={Ratings} alt="" />
                                                </div>
                                        </div>                                    
                            })
                        }
                    </div>                  
                   
                </div>       
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Top TV Show</h4>
                        <Link to={`/CategoriesOf/toptvshows`}> View More</Link>
                    </div>
                    <div className='movies-block__two flex-div'>
                        {
                            moviesStore?.slice(0,5).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >       
                                                <Link className='Link__img' to='/singleMovie'>
                                                    <img src={element.Poster} alt="" />
                                                </Link>                                     
                                                <span className='movies-Box__genre'>{element.Type}</span>
                                                <h5 className='movies-Box__title'>{element.Title}</h5>
                                                <div className='movies-Box__duration'>
                                                    <img src={Duration} alt="" />
                                                    <img src={Ratings} alt="" />
                                                </div>
                                        </div>                                    
                            })
                        }
                    </div>                  
                   
                </div>
            </div>
        </div>
    );
}

export default Homepage;
