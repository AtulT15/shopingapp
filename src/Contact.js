import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
            <h1 align="center" className='my-2'>Contact Us</h1> <hr/>
        <div className='container' id='box-1'>
            <form>
               <div>
                <label className='form-label mt-3'>Name</label>
                <input type="text" className='form-control' placeholder='Enter your name'/>
               </div>
               <div>
                <label className='form-label mt-3'>Email</label>
                <input type="email" className='form-control' placeholder='xyz@gmail.com'/>
               </div>
               <div>
                <label className='form-label mt-3'>Message</label> 
                <textarea className='form-control' placeholder='Enter your message' rows="6"></textarea>
               </div>
               <div align="center" className='mt-4'>
                <button style={{backgroundColor:" rgb(103, 103, 246)",color:"white"}}  className='btn btn-dark'>Send</button>
               </div>
            </form>
        </div>
    </div>
  )
}
