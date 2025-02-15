import React from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import './Navigation.css'
function Navigation() {
    const navigate=useNavigate();
  return (
    
    <div>
        <nav>
            <ol onClick={()=>navigate('/')}>Home</ol>
            <ol onClick={()=>navigate('/Login')}>Login</ol>
            <ol onClick={()=>navigate('/About')}>About</ol>
        </nav>
    </div>
  )
}

export default Navigation