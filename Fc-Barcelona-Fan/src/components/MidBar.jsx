import React from 'react'
import {makeStyles} from "@material-ui/core"
import Container from '@mui/material/Container'

import Post from './Post'

const useStyles = makeStyles((theme)=>({
  cover : {
    paddingTop : theme.spacing(10),
   
    
    
   },
}))

const MidBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cover}>
      <Post/>
     
    </Container>
  )
}

export default MidBar;