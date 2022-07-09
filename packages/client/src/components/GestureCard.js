import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    color: "#29514E",
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 150,
    boxShadow: "10px 0 20px 0 #efefef",
    borderRadius: "15px",
    alignItems: "center",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    margin: "25px",
    left: "25%",

    transition: "background 0.5s",

    "&:hover": {
      cursor: "pointer",
      background: "#00B0BB",

      transition: "background 0.5s",
    },
  },

  cardClicked: {
    position: "relative",
    color: "#29514E",
    width: 300,
    height: 150,
    boxShadow: "10px 0 20px 0 #efefef",
    borderRadius: "15px",
    alignItems: "center",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    margin: "25px",
    left: "25%",
    backgroundColor: "rgb(0, 176, 187, 0.5)",
  },

  icon: {
    height: '40px',
    width: 'auto'
  },

  bottomBox: {
    position: 'absolute',
    right: 10,
    bottom: -10,
    width: 75,
    height: 25,
    borderRadius: '5px',
    backgroundColor: '#437B83',
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
  },
}));

export default function GestureCard(props) {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(props.completed ?? false);

  const onCompleted = () => {
    setIsClicked(true);
    props.onComplete();

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/dashboard/rand-id/${props.id}`, {
      method: "POST"
    }).then(() => {
      console.log("Marked");
    })
  }

  return (
    <div
      className={!isClicked ? classes.card : classes.cardClicked}
      onClick={onCompleted}
    >
      <img
        className={classes.icon}
        alt=" "
        src={props.img}
        style={{ paddingRight: '20px' }}
      />
      <p style={{ fontWeight: 'bold' }}>{props.content}</p>
      <div className={classes.bottomBox}>
        <p
          className={classes.description}
          style={{ fontSize: '10px', color: 'white' }}
        >
          {props.points} Points
        </p>
      </div>
    </div>
  );
}
