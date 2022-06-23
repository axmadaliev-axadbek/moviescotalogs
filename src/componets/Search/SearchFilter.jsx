import React from 'react';
import Duration from "../../Assert/img/Duration.png"
import Ratings from "../../Assert/img/Ratings.png"
import "./SearcFilter.scss"
import { Link } from 'react-router-dom';
const SearchFilter = ({moviesArr}) => {
    const moviesStore = moviesArr
    console.log(moviesStore, 'movestore');
    return (
        <div className='search'>
            <div className='container'>
            

                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Top TV Show</h4>
                        <Link to={`/Categories`} > View More </Link >
                    </div>

                    {/* cotalog */}
                    <div className='movies-block__two flex-div'>
                        {
                            moviesStore?.map((element, index)=>{
                                    return <div key={index} className='movies-Box movies-bigBox' >                                            
                                                <img src={element.Poster} alt="" />
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


                {/* Pagination */}


             

            </div>
        </div>
    );
}

export default SearchFilter;
