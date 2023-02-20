import React from 'react'
import menscloth from './Image/mensclothing.jpeg'
import womencloth from './Image/womencloth.jpeg'
import jewelary from './Image/jewelary.jpeg'
import electronic from './Image/electronic.jpeg'

export default function About() {
  return (
    <div className='container my-4'>
        <h1 align="center">About Us</h1> <hr/>
        <p style={{textAlign:"center",fontSize:"20px",fontWeight:"lighter"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore
         vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
         <h2 align="center">Our Product</h2>
         <div className='container about-img my-5'>
            <div className='card mx-3'>
                <img src={menscloth} alt='..' style={{width:"253px",borderRadius:"5px"}}></img>
                <h5 style={{textAlign:"center"}} className='card-body'>Men's Clothing</h5>
            </div>
            <div className='card mx-3' style={{width:"265px"}}>
                <img src={womencloth} alt='..' style={{width:"252px",borderRadius:"5px"}}></img>
                <h5 style={{textAlign:"center"}} className='card-body'>Women's Clothing</h5>
            </div>
            <div className='card mx-2'>
                <img src={jewelary} alt='..' style={{width:"250px",borderRadius:"5px"}}></img>
                <h5 style={{textAlign:"center"}} className='card-body'>Jewelery</h5>
            </div>
            <div className='card mx-3'>
                <img src={electronic} alt='..' style={{width:"250px",borderRadius:"5px"}}></img>
                <h5 style={{textAlign:"center"}} className='card-body'>Electronic</h5>
            </div>
         </div>
    </div>
  )
}
