import React from "react";
import Achievements from "../components/profile/Achievements";
import Gesture from "../components/profile/Gesture";
import { makeStyles } from '@mui/styles';
import coffee from "../resources/profile/coffee.png";
import paw from "../resources/profile/paw.png";
import figure from "../resources/profile/figure.png";

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFFFFF !important',
    position: 'relative',
    overflow: 'hidden'
  },

  achievementContent: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: '13% 29% 29% 29%',
    justifyItems: 'center',
    width: '0%',
    height: '60%',
    transform: 'scale(0.85)'
  },

  achievementTitle: {
    gridColumn: '1/3', 
    fontSize: '30px',
    color: '#437B83'
  },

  gesturesContent: {
    outline: '3px solid green',
    display: 'inline-block',
    width: '450px',
    height: '500px',
    transform: 'scale(0.8)'
  },

  gestureTitle: {
    fontSize: '30px',
    color: '#437B83',
    textAlign: 'center',
    marginBottom: '0px'
  }

}))

export default function ProfilePage() {
  const classes = useStyles()

  return (
    <div className={classes.bodyMain}>
      {/* <div className={classes.achievementContent}>
        <h1 className={classes.achievementTitle}>Achievements</h1>
        <Achievements/>
        <Achievements/>
        <Achievements/>
        <Achievements/>
        <Achievements/>
        <Achievements/>
      </div> */}
      <div className={classes.gesturesContent}>
        <h1 className={classes.gestureTitle}>Completed Gestures</h1>
        <div style={{float:'left', marginBottom: '-50px'}}>
          <Gesture image={coffee} text={'test test test test test test test test test test'}/>
        </div>
        <div style={{float:'right', marginBottom: '-50px'}}>
          <Gesture image={paw} text={'test test test test test test test test test test'}/>
        </div>
        <div style={{float:'left'}}>
          <Gesture image={figure} text={'test test test test test test test test test test'}/>
        </div>
      </div>
      


    </div>
  ) 
}