import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Buy from './Buy'
import "./Shop.css"
import All from './Image/all.png'
import menscloth from './Image/mens-clothing.png.png'
import womencloth from './Image/womenclothing.png.png'
import Jewelary from './Image/jewellary.png'
import electronic from './Image/electronic.png'

export default function MyHome() {

    const[data,setdata]=useState([])
    const[filter,setfilter]=useState(data)
    const fun=true;
    

    useEffect(()=>{
      let getapi= async()=>{
        let response= await fetch(`https://fakestoreapi.com/products/`)

        if(fun){
          setdata(await response.clone().json())
          setfilter(await response.json())
        }
        return()=>{fun=false
        }
      }
      getapi();
    },[])

    const filterproduct=(sun)=>{
      const updatelist=data.filter((item)=>item.category === sun);
      setfilter(updatelist)
    }



  return (
    <div className='container'>
        <div align="center" className='my-5'>
        <p className='display-4 my-3 latest bn53' align="center" style={{position:"relative",fontFamily:'sans-serif'}}>Our Products</p> 
        <marquee>
        <hr/>
        <button onClick={()=>setfilter(data)} className='btn btn1 btn-sm mx-2'><img src={All} alt='...' width={150} height={150}/></button>
        <button onClick={()=>filterproduct("men's clothing")} className='btn btn-sm mx-2'> <img src={menscloth} alt='...' width={150} height={150}/> </button>
        <button onClick={()=>filterproduct("women's clothing")} className='btn btn-sm  mx-2'><img src={womencloth} alt='...' width={150} height={150}/></button>
        <button onClick={()=>filterproduct("jewelery")} className='btn btn-sm mx-2'><img src={Jewelary} alt='...' width={150} height={150}/></button>
        <button onClick={()=>filterproduct("electronics")} className='btn btn-sm mx-2'><img src={electronic} alt='...' width={150} height={150}/></button> <hr/>
        </marquee>
        </div>


    {
      filter.map((show,e)=>{
        return <div className='card card1 my-3 mx-2' id={e} key={e}>
          <h5 className='title1 my-2'>{show.title}</h5>
          {/* <marquee> */}
          <img className='mx-5 my-4 img1' src={show.image} alt="..." style={{height:"250px",width:"250px"}}/>
          {/* </marquee> */}
          
          <p className='card-body para'>{show.description}</p> <hr/>
          <span style={{textAlign:"center",fontSize:"20px",fontWeight:"lighter"}}>Rs.{show.price}</span> <hr/>
          
          <div align="center">
            <Link  to="Buy" type='button' style={{backgroundColor:" rgb(103, 103, 246)",color:"white"}} className='btn btn-dark btn-lg mx-2 my-4'>Buy Now</Link>
            {/* <Link to="Cart" type='button' className='btn btn-dark my-4' style={{backgroundColor:" rgb(103, 103, 246)",color:"white"}}>Add to Cart</Link> */}
          </div>
        </div>
        
      })
    }
  
    </div>
  )
}
