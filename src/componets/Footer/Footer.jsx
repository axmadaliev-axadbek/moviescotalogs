import React, { memo } from 'react';
import "./Footer.scss"
import ArrowRight from "../../Assert/img/ArrowRight.png"
import location from "../../Assert/img/location.png"
import message from "../../Assert/img/message.png"
import phone from "../../Assert/img/phone.png"

const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className='container footer'>
                <div className='join'>
                    <h2 className='join__company'>Watchflix</h2>
                    <h4 className='join__desc'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</h4>
                    <h3 className='join__name'>Join Newsletters</h3>
                    <label className='join__label'>
                        <input type="text" placeholder='Insert your mail here' className='join__input'/>
                        <button className='join__label__btn'> <img src={ArrowRight} alt="" />  </button>
                    </label>
                </div>
                                
                <div className='links'>
                        <div className='flex-div'>
                            <ul className='footer-nav'>
                                <h4 className='footer-nav__title'> Products</h4>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Movies</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">TV Show</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Videos</a>
                                </li>
                            </ul>
                            <ul className='footer-nav'>
                                <h4 className='footer-nav__title'> Media Group</h4>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Nice Studio</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Nice News</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Nice TV</a>
                                </li>
                            </ul>
                            <ul className='footer-nav'>
                                <h4 className='footer-nav__title'> Sitemap</h4>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">About</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Careers</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="" className="footer-nav__item__link">Press</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex-div' style={{marginTop:'100px'}}>
                            <img src={location} alt="" />                          
                            <img src={message} alt="" />                          
                            <img src={phone} alt="" />                          
                            
                        </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Footer) ;
