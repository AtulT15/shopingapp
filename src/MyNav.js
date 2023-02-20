import React, { } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import  Login  from './Login';



export default function MyNav() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{height:"100px",backgroundColor:" rgb(103, 103, 246)"}}>
  <div className="container">
   <h2 className='navbar-brand mx-5 fw-bold fs-4' style={{fontFamily:"Solitreo', cursive",color:"white"}}><b>SHOPPING CENTER</b></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="nav">
      <div className="navbar-nav mx-5">
        <ul className='navbar-nav mx-5'>
          <li className='nav-item'><Link style={{fontSize:"18px"}} className='nav-link' to="/">Home</Link></li>
          <li className='nav-item'><Link style={{fontSize:"18px"}} className='nav-link' to="Products">Products</Link></li>
          <li className='nav-item'><Link style={{fontSize:"18px"}} className='nav-link' to="About">About</Link></li>
          <li className='nav-item'><Link style={{fontSize:"18px"}} className='nav-link' to="Contact">Contact</Link></li>
        </ul>
      </div>
      <Link type='button' to="Login" className=' button btn mx-2'><LoginIcon/>Login</Link>
      <Link type='button' to="Register" className='btn button mx-2'><HowToRegRoundedIcon/>Registrion</Link>
      {/* <button className='btn btn-outline-dark mx-2'><ShoppingCartIcon/>Cart(0)</button> */}
    </div>
  </div>
</nav>
    </div>
  )
}
