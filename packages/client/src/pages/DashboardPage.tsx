import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles: Function = makeStyles(() => ({
  logoText: {
      color: "#00B0BB",
      fontSize: 30,
      textAlign: 'center'
    },

  line: {
    color: "F8F2F2",
  }
}
));

export default function Dashboard() {
  const classes = useStyles();
  return (
      <div>
        <div>
          <h1 className={classes.logoText}>Kindly.</h1>
          <hr className={classes.line}></hr>
        </div>
        <div> </div>
      </div>
  )
}
