import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Mail from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography'
import { Cancel, Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import {alpha, makeStyles} from '@material-ui/core'
import Avatar from '@mui/material/Avatar';
import eddie from '../assets/eddie.jpg'


 const useStyles = makeStyles((theme)=>({
  toolBar :{
    display : "flex",
    justifyContent: "space-between",
    backgroundColor:"#1E90FF",
    color:"white"
  },
  code1 : {
    display : "none",
    [theme.breakpoints.up("sm")]:{
      display : "block",
    }},
  code2 : {
    display : "block",
    [theme.breakpoints.up("sm")]:{
      display : "none",
    },
    },
    
  find:{
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width : "30%",
    [theme.breakpoints.down("sm")] : {
      display:(props)=>(props.open ? "flex" : "none"),
      width : "50%"
    },
   },
   
   input : {
    color : "white",
    marginLeft: theme.spacing(1),
  },
  cancel1:{
    [theme.breakpoints.up("sm")]:{
      display : "none",
    }

  },
  image:{
    marginBottom: theme.spacing(1)

  },
  
  icons :{
    alignItems : "center",
    display:"flex",
    cursor:"pointer",
    [theme.breakpoints.down("sm")] :{
      display : (props)=>(props.open ? "none" : "flex")
    }
  },
  badges: {
    marginRight : theme.spacing(2)
  },
  up: {
    marginRight : theme.spacing(2),
    [theme.breakpoints.up("sm")]:{
      display:"none"
    }
    },

  
}))
const NavBar = () => {
    const [open,setOpen] = useState(false);
    
    const classes = useStyles({ open });
    
    return (
    
    <AppBar position='fixed'>
      <Toolbar  className={classes.toolBar}>
        <div style={{display:'flex',gap:20}}>
        <div>
          <img style={{height:60}}  src='./src/assets/5225.png'alt='fcb logo'/>
        </div>
        <div>
          <Typography variant='h6' className={classes.code1} sx={{paddingTop:2}}> 
              
              Barcelona Fan Page
          </Typography>
          <Typography variant='h6' className={classes.code2}> 
              FCB-Fan-Page
          </Typography>
        </div>

        </div>
        
         

       
           
        <div className={classes.find}>
          <Search/>
          <InputBase placeholder='search...' className={classes.input}/>
          <div  className={classes.cancel1}>
          <Cancel
                  onClick={()=>setOpen(false)}
                  />
          </div>
         
        </div>
        
        <div className={classes.icons}>
        <div className={classes.up}>
            <Search  
              onClick={()=>setOpen(true)}
              />
      </div>
           
                <Badge badgeContent={4} color="error" className={classes.badges}>
                    <Mail />
                </Badge>
                <Badge badgeContent={17} color="error" className={classes.badges}>
                  <NotificationsIcon />
                </Badge>
                <Avatar alt="King Eddie" src={eddie} className={classes.image}/>
        </div>
      </Toolbar>
      
    </AppBar>
   )
}

export default NavBar