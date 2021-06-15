import React from 'react'
import Nav from '../Components/Nav'
import PagesTab from "./Tabs"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DS from "../Media/DS.png";
import Taskbar from '../Components/Taskbar';
import App_tracker from "../Projects/TraveryMedia/ExpenseTracker/App"
import ic_App from '../Projects/InsideCollege';
import { Index_calc } from '../Projects/Calculator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


   root_card: {
    maxWidth: 345,
  },
  media: {
    height: 175,
  },
}));



function Projects() {
    const classes = useStyles();
    return (
        <>
        <div style={{paddingTop:"3.95rem", backgroundColor:"blueviolet", backgroundImage:"url("+"https://www.xmple.com/wallpaper/linear-gradient-blue-1920x1080-c2-00ffff-0000ff-a-15-f-14.svg"+")"}}>
            <Nav/>
            <Taskbar/>
            {/* <div style={{paddingTop:"3.95rem"}}>
            <PagesTab/>
            </div> */}
        

<div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>




<Card className={classes.root_card} style={{height:"300px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.cdn.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            DS & ALGO
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Easy Topic made hard 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingTop:"215px"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href="/DS" className="banner_button1" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>LEARN MORE</a>
        </Button>
      </CardActions>
    </Card>






          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>


<Card className={classes.root_card} style={{height:"300px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.macphun.com/img/uploads/customer/blog/1548348087/15483499095c49f1d5aff0c6.28329655.jpeg?q=85&w=1680"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Social App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Share Pics with ease 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingTop:"215px"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href="/ReactSocial" className="banner_button1" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>LET'S ROLL</a>
        </Button>
      </CardActions>
    </Card>


          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>



<Card className={classes.root_card} style={{height:"300px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.logodesign.net/logo/digital-tree-with-mathematics-signs-3090ld.png?size=2&industry=calculator"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Calculator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Calculator with Ease 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingTop:"215px"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href="/Index_calc" className="banner_button1" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>LET'S Calculate</a>
        </Button>
      </CardActions>
    </Card>




          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>




<Card className={classes.root_card} style={{height:"300px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn1.vectorstock.com/i/1000x1000/99/50/expenses-stamp-on-white-vector-24759950.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Never Let Expenses Confuse You 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingTop:"215px"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href="/App_tracker" className="banner_button1" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>LET'S Kill</a>
        </Button>
      </CardActions>
    </Card>




          </Paper>
        </Grid>
      </Grid>


<Grid container spacing={3}>
      
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>




<Card className={classes.root_card} style={{height:"300px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/vectors/color-logo-of-the-school-vector-id1150645589?k=6&m=1150645589&s=612x612&w=0&h=SqPk0mTlOoOkGSDh3rFIqroOoc0vz_xu0pg_GXst9hM="
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Inside College
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Find Friends wherever they are 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{paddingTop:"215px"}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href="/ic_App" className="banner_button1" style={{fontSize:"0.65rem",textDecorationLine:"none"}}>LET'S Search</a>
        </Button>
      </CardActions>
    </Card>




          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>

    </div>
</div>
        </>
    )
}

export default Projects
