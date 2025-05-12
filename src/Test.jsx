import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { FaCloud } from "react-icons/fa";
import axios from "axios"
import './Test.css';

function Test() {
    const[temp , setTemp] = useState(null)

    useEffect(()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=34.8303&lon=0.1517&appid=59977d551fb11d64e56d1c1174aa6aaa')
        .then(function (response) {
          const responsetemp= Math.round(response.data.main.temp- 272.15)
          setTemp(responsetemp)
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      
    },[])



  return (
    <div>
       <CardContent  className='test' >
       <div className="header">

       <div className="city">
        <h1>الرياض</h1>
       </div>
       <div className="date">
        <h3>مايو 29 2025</h3>
    
       </div>
       
           </div>
        <div className='starr'>
        <hr/>
        </div>
        <div className="content">
        <div className="information">
            <div className="degre">
                <h1>
                  {temp}
                </h1>
              
                   
                    <span className='icon2'><FaCloud/></span>
                    <span className='icon1'> <FaCloud/> </span>
                
            </div>
                 
               <div className='down'>
                <h2>broken clouds</h2>
                <div className='child' >
                    <h5>  الصغري: 38</h5>
                    <hr className='star'/>
                    <h5>الكبري: 38</h5>
                </div>
               </div>
               
          
          
        
        </div>

        <div className="icon">
        <FaCloud/>
        </div>
            </div>    
       
    
    
    
         </CardContent>
         <div >
            <button style={{background:"none" , border:"none" , margin:"8px 4px" , fontWeight:"500" , fontSize:"20px", color:"white" , cursor:"pointer"}}>انجليزي</button>
         </div>
    </div>
  )
}

export default Test
