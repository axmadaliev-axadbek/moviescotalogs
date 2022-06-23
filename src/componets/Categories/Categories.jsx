import React, { useRef } from 'react';
import "./Categories.scss"
import Duration from "../../Assert/img/Duration.png"
import Ratings from "../../Assert/img/Ratings.png"
import { Link } from 'react-router-dom';
const CategoriesList = ({moviesArr}) => {
    const moviesStore = moviesArr
    console.log(moviesStore, 'movestore');
    const categoryRef= useRef()
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4 ref={categoryRef}>Top Movies</h4>
                        <Link to={`/CategoriesOf/topmovies`}> View More</Link>
                    </div>
                    <div className='movies-block__two flex-div'>

                        {
                            moviesStore?.slice(0,5).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' > 
                                                <Link className='category-link' to='/singleMovie'>
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

                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Adventure</h4>
                        <Link to={`/CategoriesOf/adventure`}> View More</Link>
                    </div>
                    <div className='movies-block__two flex-div'>
                        {
                            moviesStore?.slice(5,10).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >                                            
                                                <Link className='category-link' to='/singleMovie'>
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
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Comedy</h4>
                        <Link to={`/CategoriesOf/Comedy`}> View More</Link>
                    </div>
                    <div className='movies-block__two flex-div'>
                        {
                            moviesStore?.slice(0,5).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >                                            
                                                <Link className='category-link' to='/singleMovie'>
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
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Fantasy.</h4>
                        <Link to={`/CategoriesOf/Fantasy`}> View More</Link>

                    </div>
                    <div className='movies-block__two flex-div'>
                        {
                            moviesStore?.slice(5,10).map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >                                            
                                               <Link className='category-link' to='/singleMovie'>
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

export default CategoriesList;
