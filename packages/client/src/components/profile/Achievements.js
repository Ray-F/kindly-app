import React from 'react';
import medal from '../../resources/profile/medal.png';
import rectangle from '../../resources/profile/Rectangle.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    position: 'relative',
    height: '80px',
    width: '200px',
    backgroundColor: 'white',
    boxShadow: "rgba(0, 0, 0, 0.1) 0 5px 20px 0",
    borderRadius: "15px"
  },

  medal: {
    left: 0,
    position: 'absolute',
    marginLeft: '20px',
    zIndex: '2',
  },

  text: {
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'left',
    padding: '0 10px',
    margin: 0,
    position: 'absolute',
    marginLeft: '80px',
    fontSize: '14px',
    color: '#29514E',

  },
}));

export default function Achievements(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.text}>{props.content}</p>
      <img src={medal} className={classes.medal} />

    </div>
  );
}
