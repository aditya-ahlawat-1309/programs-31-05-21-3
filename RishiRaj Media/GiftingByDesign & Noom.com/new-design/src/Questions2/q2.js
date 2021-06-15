import React, {Component , useState} from 'react';
import Heading from  "../Questions/Heading"
import "../Questions/Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CardMembershipIcon from '@material-ui/icons/CardMembership';


function q22() {
    return (
        <div>
            <div class="container_bar">
      <div style={{
            width:"85%",
            marginLeft:"7.5%",
            marginRight:"7.5%",
            backgroundColor:"#FFDECC",
            borderRadius:"10px",
            height:"11px",
            marginTop:"45px"
        }}>
            <div style=
            {{backgroundColor:"#FF5c00",
            height:"19px",
            width:"28%",
            borderRadius:"10px",
            height:"11px",
            }} 
            >

            </div>
        </div>
    </div>
   
   <Heading/>
    <div class="q1"  
    style={{marginTop:"10px", fontSize:"25px",textAlign:"center",fontWeight:"395"}}
    >
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea ?</p>
  
  

  <div style={{marginLeft:"30px",marginLeft:"25px",marginRight:"25px"}}>

  <div style={{display:"flex"}}>
  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8"
      , marginRight:"20px",
      fontSize:"15px"
  }}>

T-shirt
  </div>

  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8"
      , marginRight:"20px",
      fontSize:"12px"
  }}>
Stationery
  </div>

  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8",fontSize:"15px"
  }}>
Bags
  </div>

  </div>


  <div style={{display:"flex"}}>
  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8"
      , marginRight:"20px",
      fontSize:"15px", marginTop:"10px"
  }}>

Table Tops
  </div>

  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8"
      , marginRight:"20px",
      fontSize:"15px", marginTop:"10px"
  }}>
Laptop Sleeves
  </div>

  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8",fontSize:"13px"
      , marginTop:"10px"
  }}>
Mugs/Bottles
  </div>

  </div>




  <div style={{display:"flex"}}>
  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8"
      , marginRight:"20px",
      fontSize:"12px", marginTop:"10px"
  }}>

Technology / Electronics / Gadgets
  </div>

  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8"
      , marginRight:"20px",
      fontSize:"15px", marginTop:"10px"
  }}>
Food & Edibles
  </div>

  <div style={{
      width:"95px",
      height:"100px",
      borderRadius:"10px", 
      borderColor:"black",
      backgroundColor:"#Dee6e8",fontSize:"15px"
      , marginTop:"10px"
  }}>
Fitness
  </div>

  </div>




<br/>

        <br/>
        

    </div>


<div style={{display:"flex"}}>

<a href="/"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/q33" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
    
</div>
    </div>
    </div>

        
    )
}

export default q22;
