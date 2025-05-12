import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { FaCloud } from "react-icons/fa";
import axios from "axios"
import './Test.css';
import moment from 'moment';
import "moment/min/loTcales";

moment.locale("ar")
let cancelAxios = null
function Test() {
  const[date , setDate] = useState("")


  useEffect(()=>{
    const X = moment().format('MMMM Do YYYY');
    setDate(X)
  },[])

    const[temp , setTemp] = useState({
      number : null,
      description :"",
      min:null,
      max:null,
      name:"",
      icons:""
    })

    useEffect(()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=34.8303&lon=0.1517&appid=59977d551fb11d64e56d1c1174aa6aaa',

            {
            cancelToken: new axios.CancelToken((c)=>{
                cancelAxios =c
            })  
            }
        )
        .then(function (response) {
          const responsetemp= Math.round(response.data.main.temp- 272.15)
          const min= Math.round(response.data.main.temp_min- 272.15)
          const max= Math.round(response.data.main.temp_max - 272.15)
          const des= response.data.weather[0].description
          const name= response.data.name
          const responseicon= response.data.weather[0].icon
          console.log(response)
          setTemp({
            number:responsetemp,
            description:des,
            min:min,
            max:max,
            name:name,
            icons:`https://openweathermap.org/img/wn/${responseicon}@2x.png`,
          })
        })

        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
        return(()=>{
          console.log("canceling")
          cancelAxios()
        })

    },[])



  return (
    <div>
       <CardContent  className='test' >
       <div className="header">

       <div className="city">
        <h1>{temp.name}</h1>
       </div>
       <div className="date">
        <h3>{date}</h3>
    
       </div>
       
           </div>
        <div className='starr'>
        <hr/>
        </div>
        <div className="content">
        <div className="information">
            <div className="degre">
                <h1>
                  {temp.number}
                </h1>
              
                    
                 
                  <img src={temp.icons} alt="icon2" />
                 
                    <span className='icon1'> <FaCloud/> </span>
                
            </div>
                 
               <div className='down'>
                <h2>{temp.description}</h2>
                <div className='child' >
                    <h5>  Min : {temp.min}</h5>
                    <hr className='star'/>
                    <h5>Max : {temp.max}</h5>
                </div>
               </div>
               
          
          
        
        </div>

        <div className="icon">
        <FaCloud/>
        </div>
            </div>    
       
    
    
    
         </CardContent>
         <div >
            <button style={{background:"none" , border:"none" , margin:"8px 4px" , fontWeight:"500" , fontSize:"20px", color:"white" , cursor:"pointer"}}>Arabic</button>
         </div>
    </div>
  )
}

export default Test
