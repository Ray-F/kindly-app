import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Vector from '../resources/Landing/Vector.png';

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFF3F3 !important',
    position: 'relative',
    outline: '3px solid green',
    overflow: 'hidden'
  },

  navButton: {
    backgroundColor: 'transparent',
    border: '3px solid black',
    width: '25%',
    fontSize: '90px'
  },

  vector: {
    float: 'right',
    outline: '3px solid red'
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    outline: '3px solid blue',
    position: 'absolute',
    // marginTop: '50%',
    // transform: 'translateY(-50%)'
  }

}))

export default function IndexPage() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.bodyMain}>
        <img src={Vector} className={classes.vector}/>
        <div className={classes.content}>
            <h1 style={{fontSize:'96px'}}>WorkPlay</h1>
            <p style={{marginTop:'-70px', fontSize:'32px'}}>Fostering Lively and Socialable Workplaces</p>
            <Button className={classes.navButton} variant='outlined'>Get Started</Button>
        </div>

      </div>
    </React.Fragment>
  );
}
