import "./Login.scss"
import {useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import img1 from '../../Assert/img/LoginImg1.png'
import Ellipse1 from '../../Assert/img/Ellipse1.png'
import Ellipse2 from '../../Assert/img/Ellipse2.png'
function Login() {
    const passwordRef = useRef()
    const loginRef = useRef()
    const {state} = useLocation()
    const returnUrl=state?.returnUrl
    const[error, setError] = useState('')
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const formOnSubmit=(event) => {
        event.preventDefault()
        fetch('https://reqres.in/api/login', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type" : "application/json"
            }
        })
        .then(res=> res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            localStorage.setItem('token', res.token)
            console.log(res);
            console.log(error);
            if(returnUrl){
                navigate(`/home${returnUrl.search}`, {
                    state: {
                        message: 'Successfully logged in'
                    }
                })
            }else {
                navigate("/", {
                    state:{
                        message: 'Successfully logged in'
                    }
                })
            }
        })
        .catch(err => {
            if(!localStorage.getItem('token')){
                alert('Email is uncorrect')
            }
            setError('Login yoki parol hato')
        })
       
    }
    const handleChange = (event)=> {
        setForm( (state) => {
            return {...state, [event.target.name] :event.target.value}
        })
    }  
    
    return <div className=" Login">
        
        <div className="container">
            <div ref={loginRef} className="register">
                <div>
                <h4> Free UI Kit</h4>
                </div>
                <div className="register__title">Film & TV</div>
                <form onSubmit={formOnSubmit} className="login" autoComplete="off">
                {/* 'eve.holt@reqres.in' */}
                    <input onChange={handleChange} name="email"  className="login__input"  type="email" placeholder="Email" />
                    <input onChange={handleChange} name="password" ref={passwordRef} className="login__input"  type="password" placeholder="Password" />
                    <Link className="login__help" to={"https://reqres.in/"} target="blank">Use email</Link>           
                    <button  className="login__next"> Login</button>
                </form>
               <img className="Login__img1" src={img1} alt="" />
               <img className="Login__img2" src={Ellipse1} alt="" />
               <img className="Login__img3" src={Ellipse2} alt="" />
            </div>
        </div>
    </div>
}

export default Login;