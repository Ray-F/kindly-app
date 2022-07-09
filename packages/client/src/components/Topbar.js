import React from 'react'
import { makeStyles } from "@mui/styles";
import user from "../resources/user.png";
import kindly from "../resources/kindlylogo.png";

const useStyles = makeStyles(() => ({
    bodyText: {
        color: "#00B0BB",
        textAlign: 'center',
    },
  
    user: {
        justifyContent: 'right',
        marginTop: 28,
        height: 40,
    },
  
    kindly: {   
        height: 55,
        width: 55,
        opacity: "55%",
        marginTop: 15,
        marginRight: 8,
    },

    container: {
        display: "flex",
        flexFlow: "row nowrap",
        width: "100vw",
        justifyContent: "center",
    },

    topbar: {
        borderBottom: "3px solid #F8F2F2"
    }
  }));
  


export default function Topbar() {
    const classes = useStyles();
    return(
        <nav className={classes.topbar}>
            <div className={classes.container}>
                <div>
                    <img alt="" src={kindly} className={classes.kindly} />
                </div>
            <div className={classes.bodyText}><h1 style={{ fontSize: "40px",}}>Kindly.</h1></div>    
                <div>
            </div> 
               <img alt="" src={user} className={classes.user} />
            </div>
            
        </nav>
    )
}