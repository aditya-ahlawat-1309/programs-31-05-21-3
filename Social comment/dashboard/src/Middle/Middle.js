import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Grid from '@material-ui/core/Grid';
import "./Middle.css"
import PieChart1 from './PieChart';
import FolderIcon from '@material-ui/icons/Folder';
import LineChart1 from './LineChart';

function Middle() {
    return (
        <>
        <div>
           <h1 style={{color:"white",marginLeft:"30px"}}>Dashboard</h1>
           
           <p style={{marginTop:"-50px", width:"150px",marginLeft:"30px"}}>Monday, <span style={{color:"lightblue"}}> 02 July 2020</span></p> 
        </div>

        <div style= {{marginTop:"15px"}}>

        <div style={{display:"flex"}}> 
 <Grid >
    <Grid item xs = {4}>
     
     <div class="border" style={{marginLeft:"35px"}}>
         <p style={{color:"white" , width:"255px",marginTop:"-15px"}}>Total Applications 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...</p>
         <h1 style={{color:"white",marginTop:"-45px",marginLeft:"25px"}}>7956</h1>
         <p style={{color:"purple",marginLeft:"-155px"}}>+3.76%</p>
         <PieChart/>
     </div>
    
     </Grid>
     </Grid>

      <Grid >
    <Grid item xs = {4}>
     
     <div class="border_blue" style={{marginLeft:"35px"}}>
         <p style={{color:"white" , width:"255px",marginTop:"-15px"}}>Shorlisted Candidates 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...</p>
         <h1 style={{color:"white",marginTop:"-45px",marginLeft:"25px"}}>4658</h1>
         <p style={{color:"purple",marginLeft:"-155px"}}>+3.76%</p>
     <PieChart/>
     </div>
    
     </Grid>
     </Grid>

      <Grid >
    <Grid item xs = {4}>
     
      <div class="border" style={{marginLeft:"35px"}}>
         
         <p style={{color:"white" , width:"255px",marginTop:"-15px"}}>Total Applications 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...</p>
        
         <h1 style={{color:"white",marginTop:"-45px",marginLeft:"25px"}}>1501</h1>
         <p style={{color:"purple",marginLeft:"-145px"}}>+3.76%</p>
     
     </div>
    
     </Grid>
     </Grid>
</div>


<div class="border-2"  style={{display:"flex"}}>
<p style={{marginLeft:"-20px",width:"1200px",marginTop:"-30px",fontSize:"13px"}}>Applications Received 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


&nbsp;&nbsp;&nbsp;&nbsp;ThisYear
&nbsp;&nbsp;&nbsp;&nbsp;This Week
&nbsp;&nbsp;&nbsp;&nbsp;Today
&nbsp;&nbsp;&nbsp;&nbsp;<FolderIcon/>Download Report</p>
<Grid>
    <Grid item xs={8}>

    </Grid>
</Grid>

<Grid>
    <Grid item xs={4}>

    </Grid>
</Grid>

</div>
        </div>
        <LineChart1/>
        </>
    )
}

export default Middle
