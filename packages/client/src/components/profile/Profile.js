import React from "react";
import { makeStyles } from '@mui/styles';
import innerCircle from '../../resources/profile/InnerCircle.png';
import outerCircle from '../../resources/profile/OuterCircle.png';
import { transform } from "typescript";
import head from '../../resources/profile/PlaceholderHead.png';
import Topbar from "../Topbar";

const useStyles = makeStyles((theme) => ({

  root: {
    position: 'relative',
    width: '425px',
    height: '425px',
    transform: 'scale(0.8)'
    // outline: '2px solid purple'
  },

  outer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  inner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-49.5%, -52.5%)'
  },

  score: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },

  number: {
    fontWeight: '900',
    color: '#00B0BB',
    fontSize: '40px',
    marginBottom: '-2px'
  },

  points: {
    color: '#437B83',
    fontSize: '24px',
  },

  pointChange: {
    color: '#437B83',
    fontSize: '24px',
    marginBottom: '-40px'
  },

  avatarImage: {
    position: "absolute",
    zIndex: 1,
    // outline: '2px blue solid',
    left: '50%',
    top: '284px',
    transform: 'translateX(-50%)'
  },

  profileName: {
    display: 'block',
    paddingBottom: '50px',
    textAlign: 'center'
  },

}))

export default function Profile() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
        <img src={outerCircle} className={classes.outer}></img>
        <img src={innerCircle} className={classes.inner}></img>
        <div className={classes.score}>
          <p className={classes.pointChange}>+ 100</p>
          <p className={classes.number}>1000</p>
          <p className={classes.points}>Points</p>
        </div>
        <img src={head} className={classes.avatarImage}></img>

      </div>
    </div>
  )
}
