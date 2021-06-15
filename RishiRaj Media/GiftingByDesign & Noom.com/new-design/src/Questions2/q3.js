import React , {Component} from 'react'
//import Heading from '../Questions/Heading';
//import LinearChart from '../Questions/LinearChart';
//import "../Questions/q1.css";
//import "../Questions/q3.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class q23 extends Component {

 data = [
  { name: 'Quantity',
  Quantity : '7500',
    }, 
];

constructor(props){
  super(props);
  this.state = {
    data:{
      name: 'Quantity',
      Quantity : 0,
    },
    bargraphData:[
  { name: 'Quantity',
  Quantity : '0',
    }, 
]
  }
}

handleChange = (e) => {
  this.setState(
    {
      data:{ 
        name: 'Quantity',
        Quantity : e.target.value,
      },
      bargraphData:[
        {
         name: 'Quantity',
        Quantity : e.target.value, 
        }
      ]
    }
  );
};





// constructor(props){
//   super(props);
//   this.state = {value:0}
// }

// handleChange = (event) => {
//   this.setState({value: event.target.value});
// };

render () {
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
    <div style={{marginTop:"5px", fontSize:"25px",textAlign:"center",fontWeight:"395"}}>
<p style={{marginTop:"5px", fontSize:"20px",marginLeft:"25px",marginRight:"25px"}}> What quantities are we looking at?</p>
  
  
  
  <div class="q3" 
  //style={{marginLeft:"30px",fontSize:"17.5px",marginLeft:"25px",marginRight:"25px",alignItems:"center"}}
  >
     
        <div width="100%" height="100%">
        <BarChart
          width={200}
          height={300}
          style={{marginTop:"0px",marginLeft:"36.5px"}}
          data={this.state.bargraphData}
          margin={{
            top: 15,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Quantity" fill="#8884d8" max="10000" min="0" />
          
        </BarChart>
      </div>

<br/>
        

<input class="range" type="range"  min="0" max="10000" 
    value={this.state.data.Quantity} 
      onChange={(e)=>{
        console.log(e.target.value);
        this.handleChange(e);
      }}/>
        <br/>
        
<br/>
    </div>
<br/>
{ 
      this.state.data.Quantity
      ? <a href="/q24" class="banner_button1" disabled={this.state.data.Quantity} style={{textDecorationLine:"none",fontWeight:"475",alignItems:"center"}}>NEXT</a>
      : <a href="" class="banner_button1_light" disabled={this.state.data.Quantity} style={{textDecorationLine:"none",fontWeight:"475",alignItems:"center"}}>NEXT</a>
    }    </div>
    </div>
    )
}
}

export default q23;
