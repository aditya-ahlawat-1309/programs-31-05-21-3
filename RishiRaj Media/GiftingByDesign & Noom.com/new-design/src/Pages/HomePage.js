import React from 'react'
import "./HomePage.css"

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import landingPage from "../images/landing-page.jpg";
function HomePage() {
    return (
 <div class="container">
 <img class="img" src={landingPage}>
                
            </img>
  <div class="centered">
  <div class = "heading"
   style={{fontSize:"33px" ,
   textAlign:"center",
    fontFamily:"Merriweather",
    fontWeight:"500",
    marginRight:"110px",
    marginLeft:"10.5px",
    }}>
    WE MAKE CORPORATE GIFTING EASY!
    </div>

  <br/>
               <div style=
               {{fontFamily:"Lato",
               fontSize:"18.5px",
               textAlign:"center",
               marginRight:"115px",
               marginLeft:"25.5px",
               }}> As your premiere corporate gifting partner,<br/> 
                we'll work together to provide meaningful, <br/>
                exceptional gifts to your customers, employees, and more.
            </div>
            <br/>
            <br/>
            <br/>
            <a href="/Q1" 
            class="banner_button1" 
            style={{
                textDecorationLine:"none",
                fontWeight:"475",
                fontFamily:"sans-serif",
                color:"black", 
                fontSize:"15x",
                 display: 'flex',
               width:"110px"
                }}>Get Started
               
               <ArrowForwardIcon color="#000"/>

                
                </a>
                </div>
  
  {/* <div class="top-left">Top Left</div>
  <div class="top-right">Top 
  Right</div>
  <div class="bottom-right">Bottom Right</div> */}
  
  
</div>

    )
}

export default HomePage
