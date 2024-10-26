import React from 'react'
import  {typography,AppBar, Typography} from '@material-ui/core';//just like bootstrape
import Videoplayer from './components/videoplayer';
import Options from './components/options';
import Notifications from './components/notifications';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({//all the styles
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes=useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align='center'>VidTalk</Typography>
      </AppBar>
      <Videoplayer/>
      <Options>
        <Notifications/>{/* options mein ja kr child component se notifications import kro */}
      </Options>
    </div>
  )
}

export default App
