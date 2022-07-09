import React from "react";
import styled from "styled-components";
import teamsLogo from "../resources/onboarding/teams_logo.png";
import Topbar from "../components/Topbar";
import StartButton from "../components/StartButton";

const ContainerWelcome = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
  margin-top: 100px;
`;

const ContainerSignUp = styled.div`
  display: grid;
  position: absolute;
  margin-top: 310px;

  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 50vh;
  text-align: left;

  > div {
    padding-left: 100px;
  }

  .setup {
    border-right: 1px solid #d4d4d4;
    input {
      padding: 12px;
      width: 500px;
      margin: 5px 0px 5px 0px;
      color: "#BCBCBC";
      border: "1px solid #D4D4D4";

      &::placeholder {
        color: #bcbcbc;
      }

      &:focus {
        border-style: solid;
        outline: none !important;
        border-color: #00b0bb;
      }
    }
  }

  .connectwith {
    align-items: center;

    img {
      height: 70px;
      border-radius: 10px;
      box-shadow: #efefef 0 5px 10px 0;
    }
  }
`;

function OnboardingPage() {
  return (
    <>
      <Topbar />

      <ContainerWelcome>
        <div>
          <h1 style={{ fontSize: "60px" }}>Welcome to Kindly.</h1>
          <p style={{ fontSize: "25px", color: "#437B83", marginTop: "-35px" }}>
            We're glad you're here!
          </p>
        </div>
      </ContainerWelcome>

      <ContainerSignUp>
        <div className="setup">
          <div>
            <p style={{ fontSize: "22px", color: "#F78849" }}>
              Let's get your team set up.
            </p>
          </div>
          <div>
            <input placeholder="name your org" />
            <input placeholder="admin email" />
            <input placeholder="add team by email" />
          </div>
          <div style={{ marginTop: "-25px" }}>
            <StartButton />
          </div>
        </div>

        <div className="connectwith">
          <p style={{ fontSize: "22px", color: "#F78849" }}>
            or connect with...
          </p>
          <div>
            <a href="https://slack.com/oauth/v2/authorize?client_id=3780929089988.3764109780439&scope=incoming-webhook,chat:write&user_scope=">
              <img
                alt="Add to Slack"
                src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
              />
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>
            <img
              src={teamsLogo}
              alt={"MS Teams Logo"}
              style={{ border: "1px solid #D4D4D4" }}
            />
          </div>
        </div>
      </ContainerSignUp>
    </>
  );
}

export default OnboardingPage;
