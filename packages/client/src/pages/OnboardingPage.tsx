import React from "react";
import styled from "styled-components";
import teamsLogo from "../resources/onboarding/teams_logo.png";
import Topbar from "../components/Topbar";
import { Box } from "@material-ui/core";

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
  margin-top: 325px;

  grid-template-columns: 1fr 1fr;
  width: 100vw;
  text-align: left;

  > div {
    padding-left: 100px;
  }

  .setup {
    border: 1px solid blue;

    p {
      color: "#BCBCBC";
      border: "1px solid #D4D4D4";
    }
  }

  .connectwith {
    border: 1px solid red;
    align-items: center;

    img {
      height: 75px;
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
            We're happy you're here!
          </p>
        </div>
      </ContainerWelcome>

      <ContainerSignUp>
        <div className="setup">
          <div>
            <p style={{ fontSize: "25px", color: "#F78849" }}>
              Let's get your team set up.
            </p>
          </div>
          <div>
            <p className="inputtext">name your org</p>
          </div>
          <div>
            <p className="inputtext">admin email</p>
          </div>
          <div>
            <p className="inputtext">add team by email</p>
          </div>
        </div>

        <div className="connectwith">
          <p style={{ fontSize: "25px", color: "#F78849" }}>
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
