import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
function Login() {
    const [Name,setName]=useState("");
    const [Password, setPassword] = useState("");
    const navigate=useNavigate();
    const submit=()=>{
        if(Name!=""&&Password!="")
        navigate('/React-Lazyloading/')
        else alert("Cann't Be NULL")
    }
  return (
    <>
    <div className='Login-container'>
      <div className='input-container'>
        <h1 className='H1-tag'>Credentials</h1>
       <div className="inputs">
        <label htmlFor="username">UserName</label>
        <input type="text" id='username' className="username" onChange={e=>setName(e.target.value)} required /><br />
        <label htmlFor="Password">Password</label>
        <input type="password" id='Password' className="Password" required onChange={e=>setPassword(e.target.value)} />
        </div>
        <button onClick={()=>{submit()}} className="Submit">Submit</button>
    </div>
    </div>
    </>
  )
}

export default Login