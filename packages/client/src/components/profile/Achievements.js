import React from "react";
import medal from "../../resources/profile/medal.png";
import rectangle from "../../resources/profile/Rectangle.png";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

root: {
    // outline: '2px solid purple',
    // display: 'inline-block'
    marginBottom: '100px',
},

 rectangle: {
    position: 'relative',
    zIndex: '1',
    // outline: '2px red solid',
 },

 medal: {
    position: 'absolute',
    marginTop: '30px',
    marginLeft: '50px',
    zIndex: '2',
 },

 text: {
    position:'absolute',
    marginLeft: '112px',
    marginTop: '40px',
    zIndex: '4',
    fontSize: '12px',
    width: '120px',
    color: '#29514E'

 }
}))

export default function Achievements() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <p className={classes.text}>test test test test test test test test test test test test test test test</p> 
            <img src={medal} className={classes.medal}></img>
            <img src={rectangle} className={classes.rectangle}></img>
            
        </div>
    )
}
