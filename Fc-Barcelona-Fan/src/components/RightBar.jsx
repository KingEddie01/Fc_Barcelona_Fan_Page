import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Trophies from './Trophies';
import {Card,makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  card:{
    display:'flex',
    flexDirection:'column',
    padding:1,
    marginBottom:theme.spacing(3),
   
    alignItems:"center"

  }

}))



const RightBar = () => {
  const classes = useStyles()
  function cup(){
    return Trophies.map((trophy,index)=>(
      <Card key={index} className={classes.card}>
        
        <div>
            <img src={trophy.image} alt='cup' style={{height:"250px"}}/>
        </div>
         <div>
          <h2 style={{fontFamily:"fantasy",fontWeight:"bold",fontSize:"25px"}}>{trophy.title}</h2>
          
        </div>
        <div>
          <p style={{paddingLeft:15}}>{trophy.year}</p>
          
        </div>
      </Card>
    ))
  }
  
  return (
    <div >
      <Container sx={{display:'flex',justifyContent:"center",padding:10,gap:5}}>
      <div>
        <Typography sx={{color:'darkslategray'}}>
          Online Friends
        </Typography>

      </div>
      <div>
        <AvatarGroup max={5}>
          <Avatar alt='batman' src='src/assets/batman.jpg'/>
          <Avatar alt='topboy' src='src/assets/topboy.jpg'/>
          <Avatar alt='god' src='src/assets/god.jpg'/>
          <Avatar alt='truck' src='src/assets/truck.jpg'/>
          <Avatar alt='kinge' src='src/assets/kingE.jpg'/>
          <Avatar alt='deep' src='src/assets/deep.jpg'/>
        </AvatarGroup>

      </div>
     
      
    </Container>
    <div style={{display:'flex',
        flexDirection:'column',
        paddingBottom:"10%",
      alignItems:"center"}}>
      <h1 style={{color:"maroon"}}>HONOURS</h1>
    </div>
    
    <div>
      {cup()}
    </div>
    </div>
    
  );
}

export default RightBar;
