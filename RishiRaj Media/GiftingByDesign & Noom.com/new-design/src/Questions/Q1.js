import React, {Component , useState} from 'react';
import Heading from  "./Heading"
import "./Q1.css";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Q1(props){

  let page1 = false;
  let page2= false;
  let page3= false;
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
    paddingLeft:"5.15rem",
    paddingRight:"5.15rem",
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
  >Event Giveaway</label><br/>

<br/>

  <label for="cm" value="cm"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"3.5rem",
    paddingRight:"3rem",
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
  >Corporate Merchandise</label><br/>

<br/>

  <label for="sp" value="sp"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"5.15rem",
    paddingRight:"5rem",
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
  >Sales Promotion</label><br/>

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
  >Special Days</label><br/>

<br/>

  <label for="rr"
  style={{
      color:"#000",
    outline:"none",
    border:"none",
    fontWeight:"500",
    borderRadius:"0.2vw",
    paddingLeft:"3.15rem",
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
  >Rewards & Recognition</label><br/>

<br/>

        <br/>
        <br/>
         <br/>

    </div>


<div style={{display:"flex"}}>

<a href="/"  class="back_button"><ArrowBackIcon style={{color:"white"}}/></a>
    
    <>
    {page1 == true ? (
         <a href="/q2" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
    ) :
    (
        page2 == true?(
 <a href="/q22" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
        ):
        (
            page3 == true ?(
 <a href="/q32" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
            ):
            (
 <a href="/Q1" class="banner_buttonQ" 
    style={{ display:"flex", width:"150px"}}
    >Next <ArrowForwardIcon style={{marginLeft:"90px"}}/></a>
            )
        )
    ) }
   </>
    
</div>
    </div>
    </div>

         );
    }

 
export default Q1;