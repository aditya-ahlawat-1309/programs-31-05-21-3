import React from "react";
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Grid from '@material-ui/core/Grid';
import Middle from "./Middle/Middle";

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
    </div>
  );
}

export default App;
