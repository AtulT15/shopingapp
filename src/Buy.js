import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Buy() {
  
  return (
    <div className='container'>
        <div className='my-3 '>
          <form className='row d-flex justify-content-center'>
          <div className='card col-md-8 '>
              <div className='card-header  '>
                <h2>Billing Process</h2>
              </div>
            <div className='row container '>
              <div className='col-md-6 my-2'>
                <label className='form-label'>First Name :</label>
                <input type="text" className='form-control' />
              </div>
              <div className='col-md-6 my-2'>
              <label className='form-label'>Last Name :</label>
                <input type="text" className='form-control' />
              </div>
              <div className='col-md-12 my-2'>
                <label className='form-label'>Email :</label>
                <input type='email' className='form-control' placeholder='xyz@gamil.com'></input>
              </div>
              <div className='col-sm-12 my-2'>
                <label className='form-label'>Address :</label>
                <input className='form-control' type='text' placeholder='street Add'></input>
              </div>
              <div className='col-lg-4 my-3'>
                <label className='form-label'>Country</label>
                <select className='form-select'>
                  <option selected>Choose..</option>
                  <option>India</option>
                </select>
              </div>
              <div className='col-sm-4 my-3'>
              <label className='form-label'>State</label>
                <select className='form-select'>
                  <option selected>Choose..</option>
                  <option>Maharastra</option>
                </select>
              </div>
              <div className='col-sm-4 my-3'>
                <label className='form-label'>Pincode</label>
                <input className='form-control'></input>
              </div> <hr/>
              <div>
                <h2>Payment</h2>
              </div>
              <div className='col-md-6 my-2'>
                <label className='form-label'>Name on card</label>
                <input className='form-control' required></input>
                <small className=''>Full name as displayed on card</small>
              </div>
              <div className='col-md-6 my-2'>
                <label className='form-label'>Credit card number</label>
                <input className='form-control' required></input>
              </div>
              <div className='col-md-3 my-3'>
                <label className='form-label'>Expiry date</label>
                <input className='form-control'></input>
              </div>
              <div className='col-md-3 my-3'>
                <label className='form-label'>Cvv</label>
                <input className='form-control'></input>
              </div> <hr/>
              <div align='center' className='my-3'>
                <button className='btn btn-primary' style={{width:"140px",height:"40px"}}>Submit</button>
              </div>
            </div>
          </div>
          </form>
        </div>
    </div>
  )
    }