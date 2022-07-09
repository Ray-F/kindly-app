import React from "react";
import medal from "../../resources/profile/medal.png";
import rectangle from "../../resources/profile/Rectangle.png";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

root: {
    // outline: '2px blue solid',
    // display: 'inline-block'
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
 }

}))

export default function Achievements() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={medal} className={classes.medal}></img>
            <img src={rectangle} className={classes.rectangle}></img>  
        </div>
    )
}
