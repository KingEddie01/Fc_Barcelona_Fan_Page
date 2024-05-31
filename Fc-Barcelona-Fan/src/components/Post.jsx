import React from 'react'
import {makeStyles,Card,CardActionArea,CardMedia,CardContent,Button,CardActions} from "@material-ui/core"

import Typography from '@mui/material/Typography'

import detail from './Details'

const useStyles = makeStyles((theme)=>({
  cover : {
    paddingTop : theme.spacing(4)
   },
   image:{
    height:1500,
    [theme.breakpoints.down("sm")] : {
      height:150,
    }
    
   },
   card :{
    marginBottom : theme.spacing(5),
    padding:theme.spacing(3)
   }

}))

const Post = () => {
  const classes = useStyles();
  function display(){
   return detail.map((data,index)=>(
      <Card className={classes.card} key={index}>
      <CardActionArea>
        <CardMedia 
        className={classes.image} 
        image={data.image}
        title = {data.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' sx={{color:"maroon"}}>
            {data.title}
          </Typography>
          <Typography variant='h6' >
          Very few clubs anywhere in the world have won so many titles. 
          The club's greatest pride and joy remain the five European Cup 
          titles won in Wembley (1992, 2011), Paris (2006), Rome (2009), 
          Berlin (2015) the FIFA Club World Cup (2009, 2011 and 2015)
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='sm' color='primary'>
            Share
          </Button>
          <Button size='sm' color='primary'>
            Learn More
          </Button>
        </CardActions>
      
        
      </CardActionArea>
      
    </Card>
      

  
    ));
    
  }
return (
  <div>
    {display()}
    <div style={{display:'flex',justifyContent:'center'}}>
    <p >&copy; {new Date().getFullYear()} <a href='https://www.fcbarcelona.com/en/' target='blank'>fcbarcelona.com</a></p>
    </div>
    

  </div>
  
 
   
  )
}

export default Post;