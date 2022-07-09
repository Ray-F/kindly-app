import React from 'react'
import { makeStyles } from "@mui/styles";
import { flexbox } from '@mui/system';
import { bottomNavigationActionClasses } from '@mui/material';

const useStyles = makeStyles(() => ({
    card: {
        position: 'relative',
        color: "#29514E",
        backgroundColor: "#EBFEFE",
        width: 300,
        height: 150,
        boxShadow: '10px 0 20px 0 #efefef',
        borderRadius: "15px",
        alignItems: "center",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        margin: "25px"
      },

    icon: {
        height: 10,
        width: 10
    },

    bottomBox: {
        position: 'absolute',
        right: 10,
        bottom: -10,
        width: 75,
        height: 25,
        borderRadius: "5px",
        backgroundColor: "#437B83",
        alignItems: "center",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
    }
}
)); 


export default function GestureCard(props) {
    const classes = useStyles();
    return(
        <div className={classes.card}>
            <img className={classes.icon} alt=" " src={props.img} style={{ paddingRight: "20px"}}></img>
            <p style={{ fontWeight: "bold"}}>Gimme a coffee bitch
            </p>
            <div className={classes.bottomBox}>
                <p className={classes.description} style={{fontSize: "10px", color: 'white'}}>100 Points</p>
            </div>
        </div>
    )
}