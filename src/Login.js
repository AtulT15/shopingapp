import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Shop.css'

export default function Login() {
  return (
    <div className='container'>
     <h1 align="center" className="my-4">Login</h1> <hr/>
    <div className="container" id='box-1'>
      <form className='form-group'>
     
        <div>
      <label className='form-label mt-2'>Email Address :</label>
      <input className='form-control mt-2' placeholder='name@example.com' type="text"/> 
      </div>
      
      <div>
      <label className='form-label mt-2'>Password</label>
      <input className='form-control mt-2' placeholder='Password' type="text"/>
      </div>

      <p className='mt-2'>New Here? <Link  to="/Register" className=' mx-2'>Registrion</Link>
</p>
     
     <div align="center">
     <button style={{backgroundColor:" rgb(103, 103, 246)",color:"white"}} className='btn btn-dark mt-3'>Login</button>
     </div>
      </form>
    </div>
    </div>
  )
}
