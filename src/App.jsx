import { useState } from 'react'
import React from 'react'
import { lazy } from 'react'
import { Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navbar/Navigation'
import {Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
const LazyAbout=React.lazy(()=>import('./components/pages/About'))
import Login from './components/pages/Login'
function App() {
  

  return (
    <>
    <Navigation></Navigation>
    <Routes>
      <Route path="/React-Lazyloading/" element={<Home />} />
  
      <Route path="/React-Lazyloading/About" element={
         <React.Suspense fallback={<div>Loading...</div>}>
        <LazyAbout/> </React.Suspense>} />
     
      <Route path="/React-Lazyloading/Login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
