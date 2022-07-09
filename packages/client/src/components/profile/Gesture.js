import React from "react";
import coffee from "../../resources/profile/coffee.png";
import rectangle from "../../resources/profile/RectangleR.png";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

root: {
    // outline: '2px blue solid',
    // display: 'inline-block'
    transform: 'scale(1)',
    marginBottom: '0px'
},

 rectangle: {
    position: 'relative',
    zIndex: '1',
    // outline: '2px red solid',
 },

 image: {
    position: 'absolute',
    marginTop: '65px',
    marginLeft: '75px',
    zIndex: '2',
 },

 text: {
    position:'absolute',
    zIndex: '3',
    marginTop: '58px',
    marginLeft: '120px',
    fontSize: '12px',
    width: '120px',
    color: '#29514E'

 }

}))

export default function Gesture(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={props.image} className={classes.image}></img>
            <p className={classes.text}>{props.text}</p>
            <img src={rectangle} className={classes.rectangle}></img>  
            
        </div>
    )
}
