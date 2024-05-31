import React, { useState } from 'react'
import {makeStyles,Button,Snackbar,Tooltip,Fab,Modal,Container,TextField,MenuItem,RadioGroup,FormControlLabel,Radio,FormLabel} from "@material-ui/core"
import {Add  as AddIcon} from "@material-ui/icons"
import MuiAlert from "@mui/material/Alert"

function Alert(props){
  return <MuiAlert elevation={6} variant="filled" {...props}/>
}

const useStyles = makeStyles((theme)=>({
  fab:{
    position:"fixed",
    bottom: 20,
    right:20
  },
  container:{
    width : 500,
    height:550,
    backgroundColor:"white",
    position:"absolute",
    top:0,
    bottom:0,
    right:0,
    left:0,
    margin: "auto",
  },
  form:{
    padding:theme.spacing(2)
  },
  item:{
    marginBottom: theme.spacing(3)

  }
}))

const Add = () => {
  const classes = useStyles();
  const [open,setOpen] = useState(false)
  const [openAlert,setOPenAlert] = useState(false)

  const handleClose =(event,reason)=>{
    if (reason === "clickaway"){
      return;
    }
    setOPenAlert(false)
    
  }
  return (
    <>
     <Tooltip title ="Add" aria-label='add' onClick={()=>setOpen(true)}>
      <Fab color='secondary' className={classes.fab} >
        <AddIcon/>
      </Fab>
     </Tooltip>
     <Modal open={open}>
      <Container className={classes.container}> 
        <form autoComplete='off' className={classes.form}>
          <div className={classes.item}>
            <TextField 
              id='standard-basic' 
              label="title" 
              size='small' 
              style={{width:"100%"}}/>
          </div>
          <div className={classes.item}>
            <TextField 
              id='outlined-multiline-static' 
              multiline
              rows={4}
              
              placeholder= "Tell your story..."
              variant='outlined'
              label="Description" 
              size='small' 
              style={{width:"100%"}}/>
          </div>
          <div className={classes.item}>
            <TextField select label="visibility" value="public">
              <MenuItem value = "public">Public</MenuItem>
              <MenuItem value = "private">Private</MenuItem>
              <MenuItem value = "unlisted">Unlisted</MenuItem>
            </TextField>
          </div>
          <div className={classes.item}>
            <FormLabel component="legend">Who can comment</FormLabel>
            <RadioGroup>
              <FormControlLabel 
                value='everybody' 
                control={<Radio size='small'/>} 
                label="Everybody">
              </FormControlLabel>
              <FormControlLabel 
                value='myFriends'
                control={<Radio size='small'/>} 
                label="My Friends">
              </FormControlLabel>
              <FormControlLabel 
                value='nobody' 
                control={<Radio size='small'/>} 
                label="Nobody">
              </FormControlLabel>
              <FormControlLabel 
                value='Custom'
                disabled 
                control={<Radio size='small'/>} 
                label="Custom(Premium)">
              </FormControlLabel>
            </RadioGroup>
          </div>
          <div className={classes.item}>
            <Button  
            onClick={()=>setOPenAlert(true)}  
            variant='outlined' color='primary' 
            style={{marginRight:20}}>Create
            </Button>
            <Button 
            variant='outlined' 
            color='secondary' 
            onClick={()=>setOpen(false)}>Cancel</Button>
          </div>


        </form>
      </Container>
      </Modal>
      <Snackbar 
          open={openAlert} 
          autoHideDuration={3000} 
          onClose={handleClose}
          anchorOrigin={{vertical:"bottom",horizontal:"left"}}>
        <Alert 
          onClose={handleClose} 
          severity ="success">Message created successfully
        </Alert>
     </Snackbar>
    </>
  )
}

export default Add;