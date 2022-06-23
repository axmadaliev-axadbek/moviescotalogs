import { NavLink,Link, useNavigate} from "react-router-dom"
import "./Navbar.scss"
import search from '../../Assert/img/search.png'
import follower1 from '../../Assert/img/follower1.png'
import btn_exit from '../../Assert/img/btn_exit.png'
import { useRef } from "react"
function Navbar() {
    const activeClassName = "nav__item__link nav__item__link--active"
    const inActiveClassName = "nav__item__link"
    const checkIsActive = (props) => props.isActive ? activeClassName : inActiveClassName
    const logOutBtn =useRef()
    const searchInput =useRef()
    const searchBtn =useRef()
    const navbarSearch =useRef()
    const navbarLabel =useRef()
    const navigate = useNavigate()

    const addStyle = () => {
        navbarLabel.current.style.display= 'flex'
        navbarSearch.current.style.display= 'none'
    }
    const logOutUser = () => {
        console.log('style');
        logOutBtn.current.style.opacity= '1'
        logOutBtn.current.style.visibility= 'visible'
    }

    const hadleLogOut = () => {
        console.log('logout');
        localStorage.removeItem('token')
    }



    const handeleSearch = () => {
        navbarSearch.current.style.display= 'flex'
        navbarLabel.current.style.display= 'none'
        console.log('search');
        navigate("/search")
    }


    return <header>

        <div className="container navbar">
            <Link to="/home" className="navbar__logo"> Watchflix</Link>
            <ul className="nav">
                <li className="nav__item">
                    <NavLink className={checkIsActive} to="/home">Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={checkIsActive} to="/singleMovie">Movies</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={checkIsActive} to="/Categories">Categories</NavLink>
                </li>
                
            </ul>
            <label ref={navbarLabel} className="label-search" >
                <input ref={searchInput} type="text" className="label-search__input" placeholder="Enter search phrase.." autoComplete="off" />
                <button ref={searchBtn}  onClick={handeleSearch} className="label-search__img"> <img src={search} alt="" /></button>
            </label>
            <button  ref={navbarSearch}  className="navbar__search"> <img onClick={addStyle} src={search} alt="" /></button>

            <img src={follower1} alt="" />
            <div className="navbar__user">
                <h5 onClick={logOutUser}> John Glich</h5>
                <button ref={logOutBtn} className="logout"  onClick={hadleLogOut}> <img src={btn_exit} alt="" /> Log out</button>
            </div>
        </div>
    </header>
}

export default Navbar