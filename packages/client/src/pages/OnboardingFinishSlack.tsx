import React from 'react';
import styled from 'styled-components';
import slackBtnMini from '../resources/onboarding/slack_button_mini.jpg';
import bgImage from '../resources/onboarding/ba_graphic_for_export.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  justify-content: center;
  align-items: center;
  
  text-align: center;
  
`

const BGImage = styled.img`
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  
  object-fit: cover;
  object-position: center;
`

const ConnectedDesc = styled.div`
  display: flex;
  
  img {
    margin-left: 10px;
    border-radius: 10px;
    box-shadow: #efefef 0 10px 40px 0;
  }
`

function OnboardingFinishSlack() {
  return (
      <Container>
        <BGImage src={bgImage} alt={'background-img'} />
        <div>
          <h1>All set up!</h1>
          <ConnectedDesc>
            <p>connected with</p>
            <img src={slackBtnMini}  alt={"slack button logo"}/>
          </ConnectedDesc>
        </div>
      </Container>
  );
}

export default OnboardingFinishSlack;