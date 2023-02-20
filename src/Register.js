import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='container'>
       <h1 className='mt-4' align="center">Register</h1> <hr/>
       <div className='container' id='box-1'>
        <form>
        <div>
            <label className='form-label'>Full Name</label>
            <input type="text" className='form-control mt-1' placeholder='Enter Your Name'/>
        </div>
        <div>
            <label className='form-label'>Email Address</label>
            <input type="email" className='form-control mt-1' placeholder='xyz@gmail.com'/>
        </div>
        <div>
            <label className='form-label'>Password</label>
            <input type="password" className='form-control mt-1' placeholder='Password'/>

            <p className='mt-2'>Already has an account? <Link to="/Login">Login</Link></p>

            <div align="center">
              <button style={{backgroundColor:" rgb(103, 103, 246)",color:"white"}} className='btn btn-dark mt-2'>Register</button>
            </div>
        </div>
        </form>
       </div>
    </div>
  )
}
