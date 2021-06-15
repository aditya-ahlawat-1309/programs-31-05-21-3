import React, {Component , useState} from 'react';
import Heading from  "../Questions/Heading"
import "../Questions/Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function q32() {
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
<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> Who are the recipients of those rewards and recognition ?</p>
  
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
    paddingLeft:"6.15rem",
    paddingRight:"6.55rem",
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

  page1={true}
  page2={false}
  page3={false}
  >Employees</label><br/>

<br/>

  <label for="cm" value="cm"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"1.5rem",
    paddingRight:"2rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    

    textDecorationLine: "none",
    

  }}

   page1={false}
  page2={true}
  page3={false}
  >Distributors/Channel Partners</label><br/>

<br/>

  <label for="sp" value="sp"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"7.15rem",
    paddingRight:"7.5rem",
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

   page1={true}
  page2={false}
  page3={false}
  >Agents</label><br/>

<br/>

  <label for="sd" value="sd"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"6.05rem",
    paddingRight:"5.95rem",
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

   page1={true}
  page2={false}
  page3={false}
  >Sales Person</label><br/>

<br/>

  <label for="rr"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"4.15rem",
    paddingRight:"3.65rem",
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

   page1={false}
  page2={false}
  page3={true}
  >Famous Personalities</label><br/>
<br/>

<label for="rr"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"4.55rem",
    paddingRight:"3.65rem",
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

   page1={false}
  page2={false}
  page3={true}
  >Bossess and Seniors</label><br/>

<br/>

        <br/>
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

export default q32;
