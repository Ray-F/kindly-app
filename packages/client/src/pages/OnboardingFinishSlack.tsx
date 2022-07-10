import React, { useEffect } from 'react';
import styled from "styled-components";
import slackBtnMini from "../resources/onboarding/slack_button_big.png";
import bgImage from "../resources/onboarding/ba_graphic_for_export.png";
import Topbar from "../components/Topbar";

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BGImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`;

const ConnectedDesc = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
  }

  img {
    margin-left: 10px;
    height: 44px;
    border-radius: 10px;
    box-shadow: #efefef 0 5px 10px 0;
  }
`;

function OnboardingFinishSlack() {
  useEffect(() => {
    fetch(process.env.REACT_APP_SLACK_ENDPOINT as string, {
      method: 'POST'
    }).then((it) => console.log("Slack sent!"));
  }, []);

  return (
    <>
      <Topbar />
      <Container>
        <BGImage src={bgImage} alt={"background-img"} />
        <div>
          <h1>All set up!</h1>
          <ConnectedDesc>
            <p>connected with</p>
            <img src={slackBtnMini} alt={"slack button logo"} />
          </ConnectedDesc>
        </div>
      </Container>
    </>
  );
}

export default OnboardingFinishSlack;
