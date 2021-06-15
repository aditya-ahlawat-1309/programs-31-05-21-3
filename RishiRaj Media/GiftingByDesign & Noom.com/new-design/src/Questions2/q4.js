import React, {Component , useState} from 'react';
import Heading from  "../Questions/Heading"
import "../Questions/Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function q24(props){
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
            {{backgroundColor:"#FFDECC",
            height:"19px",
            width:"95%",
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
    paddingLeft:"7.15rem",
    paddingRight:"9.15rem",
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
  >Yes</label><br/>

<br/>

  <label for="cm" value="cm"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"7.5rem",
    paddingRight:"9rem",
    alignItems: "center",
    paddingTop:"0.5rem",
    /* background-color: #2cc1e2; */
    backgroundColor:"#dee6e8",
    paddingBottom:"0.5rem",
    borderRadius: "10px",
    marginLeft: "3%",
    textDecorationLine: "none",
  }}

  >No</label><br/>

<br/>


<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex",marginTop:"130px"}}>

<a href="/"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
    
         <a href="/q2" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
   
    
</div>
    </div>
    </div>

         );
    }

 
export default q24;