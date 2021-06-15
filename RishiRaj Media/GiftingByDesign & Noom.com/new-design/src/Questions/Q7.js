import React, {Component , useState} from 'react';
import Heading from  "./Heading"
import "./Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Q7(props){

  const page1 = props.pag1;
  const page2=props.page2;
  const page3=props.page3;

  if(page1)
  {
     <a href="/q2" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a> 
  }

  else if(page2){
      <a href="/q22" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
  }

  else if(page3){
      <a href="/q32" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
  }


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
            {{backgroundColor:"#FF5C00",
           
            width:"100%",
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
<br/>
    <p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px", color:"#Dbb143"}}>Almost There!</p>

<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> Please share your business email address?</p>
  
  <br/>

  <div style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px"}}>

  
<input type="text" id="fname" name="fname" placeholder="Your Email adrress ..."
style={{ 
    marginLeft:"25px",
    width:"250px",
    borderColor:"#dbb143",
    height:"35px",
    borderRadius:"10px",
    
}}></input>
  

<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex",marginTop:"110px"}}>

<a href="/"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    
         <a href="/" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    
   
    
</div>
    </div>
    </div>

         );
    }

 
export default Q7;