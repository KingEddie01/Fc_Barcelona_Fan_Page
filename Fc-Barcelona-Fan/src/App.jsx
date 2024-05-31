import './App.css'
import LeftBar from './components/LeftBar';
import MidBar from './components/MidBar';
import NavBar from './components/NavBar'
import Grid from '@mui/material/Grid';
import RightBar from './components/RightBar';
import {makeStyles} from "@material-ui/core"
import Add from './components/Add';

const useStyles = makeStyles((theme)=>({
  container : {
   
  },
  right : {
    [theme.breakpoints.down("sm")] : {
      display : 'none'
    }
  }

}))


function App() {
  const classes = useStyles()
  return (<div>
    <NavBar/>
    <Grid container className={classes.container}>
      <Grid item sm={2} xs={2}>
        <LeftBar/>
      </Grid>
      <Grid item sm={7} xs ={10}>
        <MidBar/>
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <RightBar/>
      </Grid>
      <Add/>

    </Grid>
</div>
    
  )
}
export default App
