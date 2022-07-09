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
    backgroundColor: "#F6FFFE !important",
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
    border: 1px solid red;
    justify-items: center;
  }

  .leaderboard-section {
    border: 1px solid green;
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
            <GestureCard></GestureCard>
            <GestureCard></GestureCard>
            <GestureCard></GestureCard>
          </div>

          <div className="leaderboard-section">
            <h1 style={{ fontSize: "45px" }}>Leaderboard</h1>
            <LeaderboardCard size={200} />
            <LeaderboardCard size={170} />
            <LeaderboardCard size={120} />
          </div>
        </Container>
      </>
    </div>
  );
}
