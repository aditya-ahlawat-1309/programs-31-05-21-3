import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Java from '../DS&Algo/1-java';
import Data from "../DS&Algo/2-ds";
import Array from '../DS&Algo/3-array';
import List from '../DS&Algo/4-linkedlist';
import Stack from '../DS&Algo/5-stack';
import Queue from '../DS&Algo/6-queue';
import BinaryTree from '../DS&Algo/7-binarytree';
import BST from '../DS&Algo/8-bst';
import Heap from '../DS&Algo/9-heap';
import Hash from '../DS&Algo/10-hashing';
import Graph from '../DS&Algo/11-graph';
import Nav from '../Components/Nav';
import Taskbar from '../Components/Taskbar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
   
    
    backgroundColor: "white",
    
  },
}));

export default function PagesTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{
      backgroundColor:"#64C7ee",
      
    }}>
    <Taskbar/>
      <AppBar position="static" color="default" style={{paddingTop:"3.95rem", backgroundColor:"lightblue"}}>
      <Nav/>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Code Quotient Solutions" {...a11yProps(0)} style={{fontSize:"1rem", minWidth:"303px"}}/>
          <Tab label="JAVA" {...a11yProps(1)} style={{fontSize:"1rem", minWidth:"100px"}}/>
          <Tab label="DS" {...a11yProps(2)} style={{fontSize:"1rem", minWidth:"100px"}}/>
          <Tab label="Array" {...a11yProps(3)} style={{fontSize:"1rem", minWidth:"100px"}}/>
          <Tab label="List" {...a11yProps(4)} style={{fontSize:"1rem", minWidth:"100px"}}/>
          <Tab label="Stack" {...a11yProps(5)} style={{fontSize:"1rem", minWidth:"100px"}}/>
          <Tab label="Queue" {...a11yProps(6)} style={{fontSize:"1rem", minWidth:"100px"}}/>
           <Tab label="Binary Tree" {...a11yProps(7)} style={{fontSize:"1rem", minWidth:"150px"}}/>
            <Tab label="BST" {...a11yProps(8)} style={{fontSize:"1rem", minWidth:"100px"}}/>
             <Tab label="Heap" {...a11yProps(9)} style={{fontSize:"1rem", minWidth:"100px"}}/>
              <Tab label="Hashing" {...a11yProps(10)} style={{fontSize:"1rem", minWidth:"100px"}}/>
               <Tab label="Graph" {...a11yProps(11)} style={{fontSize:"1rem", minWidth:"100px"}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       
      </TabPanel>
      <TabPanel value={value} index={1}>
         <Java/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Data/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Array/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <List/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Stack/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Queue/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <BinaryTree/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <BST/>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Heap/>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Hash/>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Graph/>
      </TabPanel>
    </div>
  );
}