import React from "react";
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Grid from '@material-ui/core/Grid';
import Middle from "./Middle/Middle";
import LoginPage from "./LoginPage";



function App() {
  return (
    <div className="App">
      <Grid >
    <Grid item xs = {1}>
     <Sidebar/>
    
     </Grid>
     </Grid>

      <Grid >
    <Grid item xs = {7}>
     <Middle/>
     </Grid>
     </Grid>


      <Grid >
    <Grid  style={{marginLeft:"200px", marginTop:"30px"}}  item xs = {4}>
     <LoginPage />
     </Grid>
     </Grid>


     

     
    </div>
  );
}

export default App;
