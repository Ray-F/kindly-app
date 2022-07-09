import React from "react";
import { makeStyles } from "@mui/styles";
import Topbar from "../components/Topbar";
import GestureCard from "../components/GestureCard";
import styled from "styled-components";
import LeaderboardCard from "../components/LeaderboardCard";

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FFFFFF !important",
    position: "relative",
    overflow: "hidden",
  },

  cards: {
    position: "relative",
    marginLeft: 70,
  },
}));

const Container = styled.div`
  display: grid;
  position: absolute;
  top: 80px;

  grid-template-columns: 1fr 1fr;
  width: 100vw;
  text-align: center;

  .gesture-section {
    justify-items: center;
  }

  .harshals-hard-line {
    position: absolute;
    height: 500px;
    border: 2px solid #f8f2f2;
    border-radius: 10px;
    left: 10%;
  }

  .circle-bead-on-line {
    position: absolute;
    background-color: #00b0bb;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 20px 20px 0 #aaa;
    left: 9.75%;
    top: 30%;
  }

  .circle-bead-on-line2 {
    position: absolute;
    background-color: #00b0bb;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 20px 20px 0 #aaa;
    left: 9.75%;
    top: 57.5%;
  }

  .circle-bead-on-line3 {
    position: absolute;
    background-color: #00b0bb;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 20px 20px 0 #aaa;
    left: 9.75%;
    top: 85%;
  }
  .leaderboard-section {
  }
`;

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <div className={classes.bodyMain}>
      <>
        <Topbar />
        <Container>
          <div className="gesture-section">
            <h1 style={{ fontSize: "45px" }}>Daily Gestures</h1>
            <div className="harshals-hard-line"></div>
            <div className="circle-bead-on-line"></div>
            <div className="circle-bead-on-line2"></div>
            <div className="circle-bead-on-line3"></div>
            <GestureCard />
            <GestureCard />
            <GestureCard />
          </div>

          <div className="leaderboard-section">
            <h1 style={{ fontSize: "45px" }}>Leaderboard</h1>
            <LeaderboardCard size={180} position={20} />
            <LeaderboardCard size={160} position={55} />
            <LeaderboardCard size={140} position={30} />
          </div>
        </Container>
      </>
    </div>
  );
}
