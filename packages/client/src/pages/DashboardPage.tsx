import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Topbar from '../components/Topbar';
import GestureCard from '../components/GestureCard';
import styled from 'styled-components';
import LeaderboardCard from '../components/LeaderboardCard';
import Spinner from '../components/Spinner';
import GestureComplete from '../components/GestureComplete';

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

  load: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(4)",
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
    top: 25%;
  }

  .circle-bead-on-line2 {
    position: absolute;
    background-color: #00b0bb;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 20px 20px 0 #aaa;
    left: 9.75%;
    top: 50%;
  }

  .circle-bead-on-line3 {
    position: absolute;
    background-color: #00b0bb;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0 20px 20px 0 #aaa;
    left: 9.75%;
    top: 75%;
  }

  .leaderboard-section {
  }
`;

interface PositionData {
  thirdPos: number;
  thirdPosX: number;
  thirdSize: number;
  thirdPoints: number;

  twoPos: number;
  twoPosX: number;
  twoSize: number;
  twoPoints: number;
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<any>({});

  const [positionData, setPositionData] = useState<PositionData>({
    thirdPos: 37.5,
    thirdPosX: -17,
    thirdSize: 140,
    thirdPoints: 0,

    twoPoints: 0,
    twoPos: 60,
    twoPosX: -12,
    twoSize: 200,
  });

  const switchPos = (thirdPointAdd: number) => {
    setPositionData({
      thirdPos: 60,
      thirdPosX: -38,
      thirdSize: 200,
      thirdPoints: thirdPointAdd,

      twoPoints: 450,
      twoPos: 37.5,
      twoPosX: 10,
      twoSize: 140,
    });
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_API_ENDPOINT);
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/dashboard/rand-id`)
      .then((it) => it.json())
      .then((it) => {
        setData(it);
        setIsLoading(false);
        console.log(it);
      });
  }, []);


  const [gestureVisibility, setGestureVisibility] = React.useState(false);

  const [lastPointAdd, setLastPointAdd] = useState(0);

  const setGestureComplete = (gesture: any) => {
    setLastPointAdd(gesture.points);
    setGestureVisibility(true);
  };

  const onGestureCompleteClose = () => {
    setGestureVisibility(false);
    switchPos(lastPointAdd);
  }

  const classes = useStyles();

  if (isLoading) {
    return <>
      <Topbar />
      <div className={classes.load}>
      <Spinner/>
    </div>
      </>
  }

  return (
    <div className={classes.bodyMain}>
      <>
        <Topbar />

        <GestureComplete
            onClose={onGestureCompleteClose}
            show={gestureVisibility}
        />

        <Container>
          <div className="gesture-section">
            <h1 style={{ fontSize: "45px" }}>Daily Gestures</h1>
            <div className="harshals-hard-line"></div>
            <div className="circle-bead-on-line"></div>
            <div className="circle-bead-on-line2"></div>
            <div className="circle-bead-on-line3"></div>
            {data.gestures.map((it: any) => (
              <GestureCard
                img={it.iconUrl}
                content={it.name}
                points={it.points}
                completed={it.isCompleted}
                id={it.id}
                onComplete={() => setGestureComplete(it)}
              />
            ))}
          </div>
          <div className="leaderboard-section">
            <h1 style={{ fontSize: "45px" }}>Leaderboard</h1>
            <LeaderboardCard
              size={250}
              position={17.5}
              name={data.leaderboard[0].name}
              positionX={3}
              points={data.leaderboard[0].totalPoints}
              image={data.leaderboard[0].iconUrl}
            />
            <LeaderboardCard
              size={positionData.twoSize}
              position={positionData.twoPos}
              name={data.leaderboard[1].name}
              positionX={positionData.twoPosX}
              points={data.leaderboard[1].totalPoints}
              image={data.leaderboard[1].iconUrl}
            />
            <LeaderboardCard
              size={positionData.thirdSize}
              position={positionData.thirdPos}
              name={data.leaderboard[2].name}
              positionX={positionData.thirdPosX}
              points={
                data.leaderboard[2].totalPoints + positionData.thirdPoints
              }
              image={data.leaderboard[2].iconUrl}
            />
          </div>
        </Container>
      </>
    </div>
  );
}
