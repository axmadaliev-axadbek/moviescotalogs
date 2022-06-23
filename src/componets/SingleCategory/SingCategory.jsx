import React from 'react';
import Duration from "../../Assert/img/Duration.png"
import Ratings from "../../Assert/img/Ratings.png"
const SingleCategories = () => {
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='movies-block'>
                    <div className='flex-div'>
                        <h4>Top Movies</h4>
                        <a> View More</a>
                    </div>
                        <div className='flex-div'>
                            <div className='movies-Box'>
                                <span className='movies-Box__genre'>Horror films</span>
                                    <h5 className='movies-Box__title'>Interspace</h5>
                                <div className='movies-Box__duration'>
                                    <img src={Duration} alt="" />
                                    <img src={Ratings} alt="" />
                                </div>
                            </div>
                            <div className='movies-Box'>
                            <span className='movies-Box__genre'>Comedy</span>
                                <h5 className='movies-Box__title'>Interspace</h5>
                                <div className='movies-Box__duration'>
                                    <img src={Duration} alt="" />
                                    <img src={Ratings} alt="" />
                                </div>
                            </div>
                            <div className='movies-Box'>
                            <span className='movies-Box__genre'>TV Shows</span>
                                <h5 className='movies-Box__title'>Interspace</h5>
                                <div className='movies-Box__duration'>
                                    <img src={Duration} alt="" />
                                    <img src={Ratings} alt="" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCategories;
