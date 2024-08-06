import React  from "react"
import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'

function App() {
 let routes= createBrowserRouter([
  {path:'',element:<Layout></Layout>,errorElement:<NotFound></NotFound>,children:[
  {index:true,element:<Home></Home>},
  {path:'home',element:<Home></Home>},
  {path:'contact',element:<Contact></Contact>},
  {path:'about',element:<About></About>},
  {path:'portfolio',element:<Portfolio></Portfolio>},
  ]}
 ])
  return (
    <>
<RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
