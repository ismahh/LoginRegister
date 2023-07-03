import React, {useState} from "react"
import './Register.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
//import Register from "../Register/Register"

//import our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'


const Register = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const createUser = ()=> {
        Axios.post('http://localhost:3002/register',{
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            console.log('User has been created')
        })
    }

    return(
        <div className='registerPage flex'>
            <div className="container flex">

                <div className="videoDiv"> 
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                <h2 className='title'>Automating Financial Services & Beyond</h2>
                <p>Your Partners in Enterprise Blockchain and Conversational AI</p>
                <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to={'/'}>
                    <button className='btn'>Login</button>
                    </Link> 
                </div>
                
                </div>
                </div>

                <div className="formDiv flex"> 
                    <div className="hearerDiv">
                    <img src= {logo} alt="Logo Image"/>
                    <h3>Let Us Know You</h3>
                    </div>

                    <form action="" className='form grid'>

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdEmail className='icon'/>
                                <input type="text" id='email' 
                                placeholder='Enter Email' onChange={(event)=>{
                                    setEmail(event.target.value)}}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' 
                                placeholder='Enter Username' onChange={(event)=>{
                                    setUserName(event.target.value)}}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="text" id='password' 
                                placeholder='Enter Password' 
                                onChange={(event)=>{
                                    setPassword(event.target.value)}}
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Register</span>
                            <Link to="/login" >Login</Link>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <span className='forgotPassword'>
                            Forgot your password?<a href="">Click Here</a>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register