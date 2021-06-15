import React, {Component , useState} from 'react';
import Heading from  "./Heading"
import "./Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Q6(props){

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
            width:"85%",
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the occasion for which your are looking for the gifts?</p>
  
  <br/>

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  

  <label 
  for="eg" 
  value="eg"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"5.55rem",
    paddingRight:"5.55rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    margiTop: "-35px",

    textDecorationLine: "none",
  }}
  >Rs 50 - Rs 200</label><br/>

<br/>

  <label for="cm" value="cm"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"5.5rem",
    paddingRight:"5rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    

    textDecorationLine: "none",
    

  }}
  >Rs 200 - Rs 500</label><br/>

<br/>

  <label for="sp" value="sp"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"5.15rem",
    paddingRight:"4.85rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    marginTop: "35px",

    textDecorationLine: "none",
    

  }}

 
  >Rs 500 - Rs 1000</label><br/>

<br/>

  <label for="sd" value="sd"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"4.55rem",
    paddingRight:"4.25rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    marginTop: "35px",

    textDecorationLine: "none",
  }}
  >Rs 1,000 - Rs 3,500</label><br/>

<br/>

  <label for="rr"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"4.25rem",
    paddingRight:"4rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    marginTop: "5px",

    textDecorationLine: "none",

  }}
  >Rs 3,500 - Rs 10,000</label><br/>

<br/>

  <label for="rr"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"4.55rem",
    paddingRight:"4.35rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    marginTop: "5px",

    textDecorationLine: "none",

  }}
  >Rs 10,000 & Above</label><br/>

<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex"}}>

<a href="/"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
   
         <a href="/Q7" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
   
   
    
</div>
    </div>
    </div>

         );
    }

 
export default Q6;