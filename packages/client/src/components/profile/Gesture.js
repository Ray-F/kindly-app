import React from 'react';
import coffee from '../../resources/profile/coffee.png';
import rectangle from '../../resources/profile/RectangleR.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    // outline: '2px blue solid',
    // display: 'inline-block'
    transform: 'scale(1)',
    marginBottom: '20px',
  },

  rectangle: {
    position: 'relative',
    zIndex: '1',
    // outline: '2px red solid',
  },

  image: {
    position: 'absolute',
    width: '30px',
    height: 'auto',
    marginTop: '55px',
    marginLeft: '75px',
    zIndex: '2',
  },

  text: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '3',
    marginLeft: '120px',
    fontSize: '16px',
    width: '120px',
    color: '#29514E',

  },

}));

export default function Gesture(props) {
  const classes = useStyles();
  console.log(props.image);
  return (
    <div className={classes.root}>
      <img src={props.image} className={classes.image} />
      <p className={classes.text}>{props.text}</p>
      <img src={rectangle} className={classes.rectangle} />

    </div>
  );
}
