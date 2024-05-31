import React from 'react'
import {makeStyles} from "@material-ui/core"
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Home,Settings, List, Person, PhotoCamera, TabletMac, Bookmark, Storefront, ExitToApp } from '@mui/icons-material'
import { PlayCircleOutline } from '@material-ui/icons'


const useStyles = makeStyles((theme)=>({
  cover : {
   paddingTop : theme.spacing(10),
   backgroundColor : theme.palette.primary.main,
   height : "100vh",
   color : "white",
   position:"sticky",
   top : 0,
   [theme.breakpoints.up("sm")]:{
    backgroundColor : "white",
    color: "black",
    border : "1px solid grey",
   

  }
  },
  home : {
    display: "flex",
    alignItems : "center",
    marginBottom : theme.spacing(3),
    [theme.breakpoints.up("sm")]:{
      marginBottom : theme.spacing(4),
      cursor : "pointer"
      
    }
    
  },
  text :{
    fontWeight: 500,
    [theme.breakpoints.down("sm")]:{
      display : "none"},
    },
 
icon :{
   marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize : "18px"
    }
  }

}))

const LeftBar = () => {
  const classes = useStyles();
  return (
   <Container className={classes.cover}>
        <div className={classes.home}>
        <Home className={classes.icon}/>
          <Typography className={classes.text}>
            Homepage
          </Typography>
        </div>
        <div className={classes.home}>
        <Person className={classes.icon}/>
          <Typography className={classes.text}>
            Friends
          </Typography>
        </div>
        <div className={classes.home}>
        <List className={classes.icon}/>
          <Typography className={classes.text}>
            Lists
          </Typography>
        </div>
        <div className={classes.home}>
        <PhotoCamera className={classes.icon}/>
          <Typography className={classes.text}>
            Camera
          </Typography>
        </div>
        <div className={classes.home}>
        <PlayCircleOutline className={classes.icon}/>
          <Typography className={classes.text}>
            Videos
          </Typography>
        </div>
        <div className={classes.home}>
        <TabletMac className={classes.icon}/>
          <Typography className={classes.text}>
            Apps
          </Typography>
        </div>
        <div className={classes.home}>
        <Bookmark className={classes.icon}/>
          <Typography className={classes.text}>
            Collections
          </Typography>
        </div>
        <div className={classes.home}>
        <Storefront className={classes.icon}/>
          <Typography className={classes.text}>
            Market Place
          </Typography>
        </div>
        <div className={classes.home}>
        <Settings className={classes.icon}/>
          <Typography className={classes.text}>
            Settings
          </Typography>
        </div>
        <div className={classes.home}>
        <ExitToApp className={classes.icon}/>
          <Typography className={classes.text}>
            Logout
          </Typography>
        </div>
   </Container>
  )
}

export default LeftBar