import React from 'react'
import {Route , Routes} from 'react-router-dom'
import { Home } from '../Components/Home'
import { Login } from '../Components/Login'
import { Rest } from '../Components/Rest'
import { Sign } from '../Components/Sign'
import { NotFound } from '../Components/NotFound'
import { Navbar } from '../Components/Navbar'

export const Routeing = () => {
  return (
    <> 
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/get-restaurants' element={<Rest/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='*' element={<NotFound/>}/>
    </Routes>

    </>
  )
}
