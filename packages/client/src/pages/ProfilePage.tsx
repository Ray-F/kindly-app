import React, { useEffect, useState } from 'react';
import Achievement from '../components/profile/Achievements';
import Gesture from '../components/profile/Gesture';
import Profile from '../components/profile/Profile';
import { makeStyles } from '@mui/styles';
import coffee from '../resources/profile/coffee.png';
import paw from '../resources/profile/paw.png';
import figure from '../resources/profile/figure.png';
import Topbar from '../components/Topbar';
import Spinner from '../components/Spinner';


const useStyles: Function = makeStyles(() => ({
  bodyMain: {
    top: '80px',
    width: '100vw',
    backgroundColor: '#FFFFFF !important',
    position: 'absolute',
    height: '89vh',
    overflow: 'hidden',
  },

  widgets: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'center',
    marginTop: '60px',
    // outline: '2px solid black',
  },

  profileDescription: {
    textAlign: 'center',
    // outline: '2px solid orange',
  },

  achievementContent: {
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: '230px 230px',
    // justifyContent: 'start',
    height: '40vh',
    gridTemplateRows: '110px 110px 110px',
    position: 'relative',
  },

  achievementTitle: {
    textAlign: 'center',
    margin: '0 0 20px 0',
    padding: '0 30px 0 0',
    fontSize: '25px',
    color: '#437B83',
  },

  gesturesContent: {
    // outline: '2px solid blue',
    position: 'relative',
    left: '50px',
  },

  gestureTitle: {
    fontSize: '25px',
    color: '#437B83',
    textAlign: 'center',
    marginBottom: '0px',
  },

  profileContent: {
    // outline: '2px solid green',
  },

  avatar: {
    // outline: '2px yellow solid',
    position: 'absolute',
    top: '120px',
    left: '50%',
    transform: 'translateX(-50%)',
  },

  load: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(4)',
  },

}));

export default function ProfilePage() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<any>({});

  useEffect(() => {
    console.log(process.env.REACT_APP_API_ENDPOINT);
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/profile`)
        .then((it) => it.json())
        .then((it) => {
          setData(it);
          setIsLoading(false);
          console.log(it);
        });
  }, []);

  if (isLoading) {
    return <>
      <Topbar />
      <div className={classes.load}>
        <Spinner />
      </div>
    </>;
  } else {

    return (
        <div>

          <Topbar />

          <div className={classes.bodyMain}>

            <div className={classes.profileDescription}>
              <h1 style={{ fontSize: '60px' }}>Hey {data.profileDetails.name}!</h1>
              <p style={{
                marginTop: '-40px',
                fontSize: '18px',
                color: '#444',
              }}>{data.profileDetails.role} @ {data.profileDetails.organisation}</p>
            </div>

            <div className={classes.widgets}>
              <div className={classes.gesturesContent}>
                <h1 className={classes.gestureTitle}>Completed Gestures</h1>
                <div style={{ float: 'left', marginBottom: '-50px' }}>
                  <Gesture image={data.completedGestures.at(-3).iconUrl} text={data.completedGestures.at(-3).title} />
                </div>
                <div style={{ float: 'right', marginBottom: '-50px' }}>
                  <Gesture image={data.completedGestures.at(-2).iconUrl} text={data.completedGestures.at(-2).title} />
                </div>
                <div style={{ float: 'left' }}>
                  <Gesture image={data.completedGestures.at(-1).iconUrl} text={data.completedGestures.at(-1).title} />
                </div>
              </div>


              <div className={classes.profileContent}>
                <div className={classes.avatar}>
                  <Profile
                      totalPoints={data.profileDetails.totalPoints}
                      pointsChange={data.profileDetails.lastAddition}
                      animatedProfileUrl={data.profileDetails.animatedUrl}
                  />
                </div>
              </div>

              <div style={{ paddingRight: '40px' }}>
                <h1 className={classes.achievementTitle}>Achievements</h1>
                <div className={classes.achievementContent}>
                  {data.achievements.map((it: any) => (
                      <Achievement content={it.achievementTitle} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }
}