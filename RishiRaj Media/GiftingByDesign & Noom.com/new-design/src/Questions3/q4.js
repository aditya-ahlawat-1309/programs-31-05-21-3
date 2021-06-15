import React from 'react'
//import Heading from '../Questions/Heading';
import "./q1.css";

function q34() {
    return (
        <div>
            <div class="container_bar">
      <ul class="progressbar">
        <li class="active"></li>
        <li ></li>
        <li></li>
      </ul>
    </div>
   
   {/* <Heading/> */}
    <div  
    style={{marginTop:"10px", fontSize:"25px",textAlign:"center",fontWeight:"395"}}
    >

 


<p style={{marginTop:"10px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What's the broad theme for your perfect gifting idea?</p>
  
  
  <div class="q1"
  //style={{textAlign:"left",marginLeft:"30px",fontSize:"17.5px" , color:"black",marginLeft:"25px",marginRight:"25px"}}
  >

  <input type="checkbox" id="Sustainable<" name="gender" value="Sustainable" style={{marginTop:"20px"}}></input>
  <label for="male">Sustainable</label>


<br/>
  <input type="checkbox" id="Technology / Electronics / Gadgets" name="gender" value="Technology / Electronics / Gadgets" style={{marginTop:"20px"}}></input>
  <label for="female">Technology / Electronics / Gadgets</label>


<br/>
  <input type="checkbox" id="Work from Home" name="gender" value="Work from Home" style={{marginTop:"20px"}}></input>
  <label for="other">Work From Home</label>
<br/>


  <input type="checkbox" id="Merchandise & stationery" name="gender" value="Merchandise & stationery" style={{marginTop:"20px"}}></input>
  <label for="female">Merchandise & Stationary</label>
<br/>

  <input type="checkbox" id="The Usual" name="gender" value="The Usual" style={{marginTop:"20px"}}></input>
  <label for="other">The Usual</label>
<br/>
  <input type="checkbox" id="The Usual" name="gender" value="The Usual" style={{marginTop:"20px"}}></input>
  <label for="other">Food & Edibles</label>
<br/>
  <input type="checkbox" id="The Usual" name="gender" value="The Usual" style={{marginTop:"20px"}}></input>
  <label for="other">Fitness</label>
  <br/>

  <input type="checkbox" id="The Usual" name="gender" value="The Usual" style={{marginTop:"20px"}}></input>
  <label for="other">Gift Cards</label>
  <br/>

  <input type="checkbox" id="The Usual" name="gender" value="The Usual" style={{marginTop:"20px"}}></input>
  <label for="other">Utilities</label>



<br/><br/>

  </div>

<br/>
        
         <a href="/q4" class="banner_button1" 
         style={{textDecorationLine:"none",fontWeight:"475",alignContent:"center"}}
         >NEXT</a></div>

    
    </div>


        
    )
}

export default q34;
