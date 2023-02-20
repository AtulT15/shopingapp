import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MyHome from './MyHome'
import MyNav from './MyNav'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import Products from './Products'
import About from './About'
import Buy from './Buy'

export default class MyMain extends Component {
  render() {
    return (
      <div>
  <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path='/' element={<MyHome/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='Buy' element={<Buy/>}/>
      </Routes>
  </BrowserRouter>
      </div>
    )
  }
}


