import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Topbar from '../components/Topbar';
import GestureCard from '../components/GestureCard';
import styled from 'styled-components';
import LeaderboardCard from '../components/LeaderboardCard';

const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFFFFF !important',
    position: 'relative',
    overflow: 'hidden',
  },

  cards: {
    position: 'relative',
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

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<any>({});

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

  const classes = useStyles();

  if (isLoading) {
    return <p>Is loading</p>;
  }


  return (
      <div className={classes.bodyMain}>
        <>
          <Topbar />
          <Container>
            <div className="gesture-section">
              <h1 style={{ fontSize: '45px' }}>Daily Gestures</h1>
              <div className="harshals-hard-line"></div>
              <div className="circle-bead-on-line"></div>
              <div className="circle-bead-on-line2"></div>
              <div className="circle-bead-on-line3"></div>
              {data.gestures.map((it: any) => (
                  <GestureCard img={it.iconUrl} content={it.name} points={it.points} completed={it.isCompleted} id={it.id} />
              ))}
            </div>

            <div className="leaderboard-section">
              <h1 style={{ fontSize: '45px' }}>Leaderboard</h1>
              <LeaderboardCard size={250} position={17.5} name={data.leaderboard[0].name}
                               positionX={3}
                               points={data.leaderboard[0].totalPoints} image={data.leaderboard[0].iconUrl} />
              <LeaderboardCard size={200} position={60} name={data.leaderboard[1].name}
                               positionX={-12}
                               points={data.leaderboard[1].totalPoints} image={data.leaderboard[1].iconUrl} />
              <LeaderboardCard size={140} position={37.5} name={data.leaderboard[2].name}
                               positionX={-17}
                               points={data.leaderboard[2].totalPoints} image={data.leaderboard[2].iconUrl} />
            </div>
          </Container>
        </>
      </div>
  );
}
