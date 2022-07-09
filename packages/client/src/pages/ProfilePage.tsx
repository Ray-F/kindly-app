import React from "react";
import Achievements from "../components/profile/Achievements";
import Gesture from "../components/profile/Gesture";
import Profile from "../components/profile/Profile";
import { makeStyles } from '@mui/styles';
import coffee from "../resources/profile/coffee.png";
import paw from "../resources/profile/paw.png";
import figure from "../resources/profile/figure.png";
import Topbar from "../components/Topbar";

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    top: '80px',
    width: '100vw',
    backgroundColor: '#FFFFFF !important',
    position: 'absolute',
    height: '89vh',
    overflow: 'hidden'
  },

  widgets: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'center',
    marginTop: '60px',
    // outline: '2px solid black',
  },

  profileDescription: {
    textAlign: 'center',
    // outline: '2px solid orange',
  },

  achievementContent: {
    textAlign: 'center',
    // outline: '2px blue solid',
    display: 'grid',
    gridTemplateColumns: '230px 230px',
    justifyContent: 'start',
    height: "40vh",
    gridTemplateRows: '13% 29% 29% 29%',
    position: 'relative',
    right: '20px'
  },

  achievementTitle: {
    marginLeft: '50px',
    gridColumn: '1/3',
    fontSize: '25px',
    color: '#437B83'
  },

  gesturesContent: {
    // outline: '2px solid blue',
    position: 'relative',
    left: '50px'
  },

  gestureTitle: {
    fontSize: '25px',
    color: '#437B83',
    textAlign: 'center',
    marginBottom: '0px'
  },

  profileContent: {
    // outline: '2px solid green',
  },

  avatar: {
    // outline: '2px yellow solid',
    position: 'absolute',
    top: '140px',
    left: '50%',
    transform: 'translateX(-50%)'
  }

}))

export default function ProfilePage() {
  const classes = useStyles()

  return (
    <div>

      <Topbar />

      <div className={classes.bodyMain}>

        <div className={classes.profileDescription}>
          <h1 style={{ fontSize: '60px' }}>Hey Harshal!</h1>
          <p style={{ marginTop: '-40px', fontSize: '18px' }}>Happiness Architecture @ Gourmet Glizzys</p>
        </div>

        <div className={classes.widgets}>


          <div className={classes.gesturesContent}>
            <h1 className={classes.gestureTitle}>Completed Gestures</h1>
            <div style={{ float: 'left', marginBottom: '-50px' }}>
              <Gesture image={coffee} text={'test test test test test test test test test test'} />
            </div>
            <div style={{ float: 'right', marginBottom: '-50px' }}>
              <Gesture image={paw} text={'test test test test test test test test test test'} />
            </div>
            <div style={{ float: 'left' }}>
              <Gesture image={figure} text={'test test test test test test test test test test'} />
            </div>
          </div>


          <div className={classes.profileContent}>
            <div className={classes.avatar}>
              <Profile />
            </div>
          </div>

          <div style={{paddingRight: '40px' }}>
            <div className={classes.achievementContent}>
              <h1 className={classes.achievementTitle}>Achievements</h1>
              <Achievements />
              <Achievements />
              <Achievements />
              <Achievements />
              <Achievements />
              <Achievements />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}