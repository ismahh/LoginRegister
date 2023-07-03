import React, {useEffect, useState} from "react"
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from "axios"
//import Register from "../Register/Register"

//import our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {

    const [loginUserName, sentloginUserName] = useState('')
    const [loginPassword, sentloginPassword] = useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setstatusHolder] = useState('message')

    const loginUser = (e)=> {

        e.preventDefault();

        Axios.post('http://localhost:3002/login',{
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response)=>{
           console.log()
           if(response.data.message || loginUserName == '' || loginPassword == ''){
            navigateTo('/')
            setLoginStatus("Credentials Dont Exist!")
           }
           else{
            navigateTo('/dashboard')
           }
        })
    }

    useEffect(()=>{
        if(loginStatus !== ''){
            setstatusHolder('showMessage')
            setTimeout(()=>{
                setstatusHolder('message')
            }, 4000)
        }
    },[loginStatus])

    const onSubmit = ()=>{
        setLoginStatus('')
        sentloginUserName('')
    }

    return(
        <div className='loginPage flex'>
            <div className="container flex">

                <div className="videoDiv"> 
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                <h2 className='title'>Automating Financial Services & Beyond</h2>
                <p>Your Partners in Enterprise Blockchain and Conversational AI</p>
                
                <div className="footerDiv flex">
                    <span className="text">Don't have an account?</span>
                    <Link to={'/register'}>
                    <button className='btn'>Sign Up</button>
                    </Link> 
                </div>

                </div>
                </div>

                <div className="formDiv flex"> 
                    <div className="hearerDiv">
                    <img src= {logo} alt="Logo Image"/>
                    {/* <h3>Welcome Back!</h3> */}
                    </div>

                    <form action="" className='form grid' onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="username" id='username' placeholder='Enter Username' 
                                    onChange={(event)=>{
                                    sentloginUserName(event.target.value)}}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id="password" placeholder="Enter Password" 
                                onChange={(event) => {sentloginPassword(event.target.value);
                                }}/>
                            </div>
                            {/* <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="text" id='password' placeholder='Enter Password'
                                    onChange={(event)=>{
                                    sentloginPassword(event.target.value)}}
                                />
                            </div> */}
                        </div>
                        <Link to={'/dashboard'}>
                            <button type="submit" className="btn flex" onClick={Login}>
                                <span>Login</span>
                                <AiOutlineSwapRight className="icon" />
                            </button>
                        </Link>
                        


                        {/* <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                            <Link to={'/dashboard'}></Link>
                        </button> */}

                        <a href="/dashboard">Dashboard</a>

                        <span className='forgotPassword'>
                            Forgot your password?<a href="">Click Here</a>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login